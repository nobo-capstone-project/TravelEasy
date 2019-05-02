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
)

type gatewayContext struct {
	firebaseStore *db.FirestoreStore
	key           string
	redis         *session.RedisStore
}

func main() {

	port := common.GetEnvPort()
	sessionSvrAddr := common.GetEnvSessionSvrAddr()
	sessionKey := common.GetEnvSessionKey()
	firestoreKeyPath := common.GetEnvFirestoreKeyPath()

	// NOTE: route and stop on the same server
	routeSvrAddr := common.GetEnvRouteSvrAddr()
	stopSvrAddr := common.GetEnvRouteSvrAddr()

	fs, err := db.NewApp(context.Background(), firestoreKeyPath)
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()

	r := mux.NewRouter()
	ctx := gatewayContext{
		firebaseStore: fs,
		key:           sessionKey,
	}

	r.HandleFunc("/gateway/ok/", ctx.OkHandler)

	// auth service
	sessionSvrRouter := ctx.NewProxy(sessionSvrAddr)

	// {domain}/session/ok/: GET - get redis ping
	r.Handle("/session/ok/", sessionSvrRouter)

	// {domain}/user/auth/: POST - log in current user
	// {domain}/user/auth/: DELETE - log out current user
	r.Handle("/user/auth/", sessionSvrRouter)

	// {domain}/user/create/: POST - create new user and save to db
	r.Handle("/user/create/", sessionSvrRouter)

	// {domain}/user/{id}: GET - retrieve user profile
	// {domain}/user/{id}: PATCH - modify existing user
	r.Handle("/user/{id}", sessionSvrRouter)

	// route service
	routeRouter := ctx.NewProxy(routeSvrAddr)

	// {domain}/route/create: POST - create new route and save to db
	r.Handle("/route/create/", routeRouter)

	// {domain}/route/{id}: PATCH - modify existing route
	// {domain}/route/{id}: GET - get route details
	r.Handle("/route/{route_id}", routeRouter)

	// {domain}/route/{id}/comment: POST - post new comment
	r.Handle("/route/{route_id}/comment/", routeRouter)

	// {domain}/route/{id}/comment/{id}: PATCH - modify existing comment
	// {domain}/route/{id}/comment/{id}: DELETE - delete existing comment
	// {domain}/route/{id}/comment/{id}: GET - get comment
	r.Handle("/route/comment/{comment_id}", routeRouter)

	// stop service
	stopRouter := ctx.NewProxy(stopSvrAddr)

	// {domain}/stop/create: POST - create new stop and save to db
	r.Handle("/stop/create/", stopRouter)

	// {domain}/stop/{id}/comment: POST - post new comment
	r.Handle("/stop/{route_id}/comment/", stopRouter)

	// {domain}/stop/{id}: PATCH - modify existing route
	// {domain}/stop/{id}: GET - get stop details
	r.Handle("/stop/{stop_id}", stopRouter)

	// {domain}/stop/{id}/comment/{id}: PATCH - modify existing comment
	// {domain}/stop/{id}/comment/{id}: DELETE - delete existing comment
	// {domain}/stop/{id}/comment/{id}: GET - get comment
	r.Handle("/stop/comment/{comment_id}", routeRouter)

	// booting service
	log.Printf("serving gateway at port %s!", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), common.NewLogger(r)))
}
