// A standalone authentication server that only handles login and logout.
//
// The server receives credentials in JSON format, fetches user profile from DB,
// authenticates against the profile in the database, creates session accordingly
// and returns the profile.
//
// The server receives a session key, removes session from session server and logs out the user

package main

import (
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/db"
	"TravelEasy/svr/src/model"
	"encoding/json"
	"fmt"
	"github.com/bryoco/dazzling/session"
	"github.com/gorilla/mux"
	"golang.org/x/net/context"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

// context for authentication server
type Context struct {
	redis *session.RedisStore
	db    *db.FirestoreStore
	key   string
}

// defines credentials
type Credential struct {
	Username	string `json:"username"`
	Password	string `json:"password"`
}

// fetches and authenticates user profile from DB
// returns error if username not found or incorrect password
func (ctx *Context) getAndAuthUser(username, password string) (*model.UserProfile, error) {
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

// pings redis
func (ctx *Context) OkHandler(w http.ResponseWriter, r *http.Request) {
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
			[]byte(fmt.Sprintf("Session server connected, redis pong: %v", pong)),
			common.MimeText, w)
	}
}

// handles login and log out
func (ctx *Context) SessionHandler(w http.ResponseWriter, r *http.Request) {
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

		user, err := ctx.getAndAuthUser(cred.Username, cred.Password)
		if err != nil {
			http.Error(w, err.Error(), http.StatusForbidden)
			return
		}

		// remove salted password
		user.Password = ""

		newSessionState := session.State{
			SessionStart: time.Now(),
			Interface:    user,
		}
		_, err = session.BeginSession(ctx.key, ctx.redis, newSessionState, w)

		js, _ := json.Marshal(user)
		common.HttpWriter(http.StatusOK, js, "application/json", w)

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

func main() {

	port := os.Getenv(common.EnvPort)
	if len(port) == 0 {
		port = "8080"
	}

	redisAddr := os.Getenv(common.EnvSessionServer)
	if len(redisAddr) == 0 {
		redisAddr = "redis:6379"
	}

	sessionKey := os.Getenv(common.EnvSessionKey)
	if len(sessionKey) == 0 {
		sessionKey = "default_key"
	}

	firestoreKey := os.Getenv(common.EnvFirestoreKeyPath)
	if len(firestoreKey) == 0 {
		firestoreKey = "/firebase_key.json"
	}

	sessionDuration := time.Hour * 24 * 30 // a month

	fs, err := db.NewApp(context.Background(), firestoreKey)
	if err != nil {
		log.Fatalln("cannot create new app:", err)
	}
	defer fs.CloseClient()

	ctx := Context{
		redis: session.NewRedisStore(session.NewRedisClient(redisAddr), sessionDuration),
		key: sessionKey,
		db: fs,
	}

	router := mux.NewRouter()
	router.HandleFunc("/session/ok", ctx.OkHandler)
	router.HandleFunc("/user/auth", ctx.SessionHandler)

	log.Printf("serving redis at port %s!", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), router))
}