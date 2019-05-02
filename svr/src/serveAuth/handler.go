package main

import (
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/model"
	"encoding/json"
	"fmt"
	"github.com/bryoco/dazzling/session"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"strings"
	"time"
)

// defines credentials
type Credential struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// fetches and authenticates user profile from DB
// returns error if username not found or incorrect password
func (ctx *AuthContext) getAndAuthUser(username, password string) (*model.UserProfile, error) {
	profile, err := ctx.db.GetUserProfileByUsername(username)
	if err != nil {
		return nil, err
	}

	if err := profile.AuthenticatePassword(password); err != nil {
		return nil, err
	} else {
		return profile, nil
	}
}

func makeSessionState(u *model.UserProfile) session.State {
	// remove salted password
	u.Password = ""

	return session.State{
		SessionStart: time.Now(),
		Interface:    &u,
	}
}

// pings redis
func (ctx *AuthContext) OkHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method != http.MethodGet {
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}

	if pong, err := ctx.redis.Client.Ping().Result(); err != nil {
		common.HttpWriter(http.StatusOK,
			[]byte(fmt.Sprintf("Session server not connected, redis error: %v", err)),
			common.MimeText, w)
	} else {
		common.HttpWriter(http.StatusOK,
			[]byte(fmt.Sprintf("Session server connected, ping redis: %v", pong)),
			common.MimeText, w)
	}
}

// handles login and log out
// {domain}/user/auth/: POST - log in current user
// {domain}/user/auth/: DELETE - log out current user
func (ctx *AuthContext) AuthHandler(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	// login
	case http.MethodPost:
		if !strings.HasPrefix(r.Header.Get(common.HeaderContentType), common.MimeJSON) {
			http.Error(w, common.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// decode cred
		var cred Credential
		if err := json.NewDecoder(r.Body).Decode(&cred); err != nil {
			http.Error(w, err.Error(), http.StatusUnsupportedMediaType)
			return
		}

		profile, err := ctx.getAndAuthUser(cred.Username, cred.Password)
		if err != nil {
			http.Error(w, err.Error(), http.StatusForbidden)
			return
		}

		_, err = session.BeginSession(ctx.key, ctx.redis, makeSessionState(profile), w)

		b, _ := json.Marshal(profile)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)

	// logout
	case http.MethodDelete:

		log.Println(r.Header.Get("Authorization"))

		// `state` is discarded
		_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
		if err != nil {
			http.Error(w, err.Error(), http.StatusUnauthorized)
			return
		}

		_, err = session.EndSession(r, ctx.key, ctx.redis)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		common.HttpWriter(http.StatusOK, []byte("you have been signed out"), common.MimeText, w)
	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

// creates the given user to firestore and creates session
// {domain}/user/create: POST - create new user and save to db
func (ctx *AuthContext) UserCreateHandler(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case http.MethodPost:

		if !strings.HasPrefix(r.Header.Get(common.HeaderContentType), common.MimeJSON) {
			http.Error(w, common.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		decoder := json.NewDecoder(r.Body)
		var up model.UserProfile
		if err := decoder.Decode(&up); err != nil {
			http.Error(w, err.Error(), http.StatusUnsupportedMediaType)
			return
		}

		res, err := ctx.db.AddUser(&up)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		_, err = session.BeginSession(ctx.key, ctx.redis, makeSessionState(res), w)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		b, _ := json.Marshal(res)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)
		return

	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

// {domain}/user/{id}: GET - retrieve user profile
// {domain}/user/{id}: PATCH - modify existing user
func (ctx *AuthContext) UserIdHandler(w http.ResponseWriter, r *http.Request) {

	documentID := mux.Vars(r)["id"]
	if len(documentID) == 0 {
		http.Error(w, http.ErrNoLocation.Error(), http.StatusBadRequest)
		return
	}

	switch r.Method {
	case http.MethodGet:

		currentState := &session.State{}
		_, err := session.GetState(r, ctx.key, ctx.redis, currentState)
		if err != nil {
			http.Error(w, err.Error(), http.StatusForbidden)
			return
		}

		userProfile, err := ctx.db.GetUserProfileByDocumentID(documentID)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// remove salted password
		userProfile.Password = ""

		b, _ := json.Marshal(userProfile)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)
		return

	case http.MethodPatch:

		if !strings.HasPrefix(r.Header.Get(common.HeaderContentType), common.MimeJSON) {
			http.Error(w, common.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		currentState := &session.State{}

		_, err := session.GetState(r, ctx.key, ctx.redis, currentState)
		if err != nil {
			http.Error(w, err.Error(), http.StatusForbidden)
			return
		}

		if currentState.Interface.(model.UserProfile).DocumentID != documentID {
			http.Error(w, common.ErrCannotAccessProfile.Error(), http.StatusForbidden)
			return
		}

		decoder := json.NewDecoder(r.Body)
		var up model.UserProfile
		if err := decoder.Decode(&up); err != nil {
			http.Error(w, err.Error(), http.StatusUnsupportedMediaType)
			return
		}

		res, err := ctx.db.ModifyUser(&up)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// refresh session since contextual state has changed
		_, err = session.EndSession(r, ctx.key, ctx.redis)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// refresh state
		_, err = session.BeginSession(ctx.key, ctx.redis, makeSessionState(res), w)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		b, _ := json.Marshal(res)
		common.HttpWriter(http.StatusCreated, b, common.MimeJSON, w)
		return

	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}