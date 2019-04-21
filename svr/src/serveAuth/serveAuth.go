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
	"fmt"
	"github.com/bryoco/dazzling/session"
	"github.com/gorilla/mux"
	"golang.org/x/net/context"
	"log"
	"net/http"
	"time"
)

// context for authentication server
type AuthContext struct {
	redis *session.RedisStore
	db    *db.FirestoreStore
	key   string
}

// serve authentication server
func main() {

	port := common.GetEnvPort()
	redisAddr := common.GetEnvRedisAddr()
	sessionKey := common.GetEnvSessionKey()
	firestoreKeyPath := common.GetEnvFirestoreKeyPath()

	fs, err := db.NewApp(context.Background(), firestoreKeyPath)
	if err != nil {
		log.Fatalln("cannot create new app:", err)
	}
	defer fs.CloseClient()

	ctx := AuthContext{
		redis: session.NewRedisStore(session.NewRedisClient(redisAddr), time.Hour * 24 * 30),
		key: sessionKey,
		db: fs,
	}

	router := mux.NewRouter()
	router.HandleFunc("/session/ok/", ctx.OkHandler)
	router.HandleFunc("/user/auth/", ctx.SessionHandler)
	router.HandleFunc("/user/create/", ctx.UserCreateHandler)
	//router.HandleFunc("/user/{user_id}", ctx.UserHandler)

	log.Printf("serving redis at port %s!", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), router))
}

