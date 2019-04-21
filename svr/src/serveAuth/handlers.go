package main

import (
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/model"
	"encoding/json"
	"fmt"
	"github.com/bryoco/dazzling/session"
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
	up, err := ctx.db.GetUserProfileByUsername(username)
	if err != nil {
		return nil, err
	}

	if err := up.AuthenticatePassword(password); err != nil {
		return nil, err
	} else {
		return up, nil
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
// {domain}/user/auth: POST - log in current user
// {domain}/user/auth: DELETE - log out current user
func (ctx *AuthContext) SessionHandler(w http.ResponseWriter, r *http.Request) {
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

		up, err := ctx.getAndAuthUser(cred.Username, cred.Password)
		if err != nil {
			http.Error(w, err.Error(), http.StatusForbidden)
			return
		}

		_, err = session.BeginSession(ctx.key, ctx.redis, makeSessionState(up), w)

		b, _ := json.Marshal(up)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)

	// delete session
	case http.MethodDelete:

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

		common.HttpWriter(http.StatusOK, []byte("you have been signed out"), "application/json", w)
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

		b, _ := json.Marshal(res)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)
		return

	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

// doesnt really make sense to retrieve user from auth server
//// {domain}/user/{id}: GET - retrieve user profile
//// {domain}/user/{id}: PATCH - modify existing user
//func (ctx *AuthContext) UserHandler(w http.ResponseWriter, r *http.Request) {
//
//}