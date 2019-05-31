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
	sessionKey := common.GetEnvSessionKey()
	firestoreKeyPath := common.GetEnvFirestoreKeyPath()

	// NOTE: route and stop on the same server
	routeStopSvrAddr := common.GetEnvRouteStopSvrAddr()
	authSvrAddr := common.GetEnvAuthSvrAddr()
	//redisAddr := common.GetEnvRedisAddr()

	fs, err := db.NewApp(context.Background(), firestoreKeyPath)
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()

	r := mux.NewRouter()
	ctx := gatewayContext{
		firebaseStore: fs,
		key:           sessionKey,
		//redis:         session.NewRedisStore(session.NewRedisClient(redisAddr), time.Hour * 24 * 30),
	}

	r.HandleFunc("/gateway/ok/", ctx.OkHandler)

	// auth service
	authSvrRouter := ctx.NewProxy(authSvrAddr)

	// {domain}/session/ok/: GET - get redis ping
	r.Handle("/session/ok/", authSvrRouter)

	// {domain}/user/auth/: POST - log in current user
	// {domain}/user/auth/: DELETE - log out current user
	r.Handle("/user/auth/", authSvrRouter)

	// {domain}/user/create/: POST - create new user and save to db
	r.Handle("/user/create/", authSvrRouter)

	// {domain}/user/{id}: GET - retrieve user profile
	// {domain}/user/{id}: PATCH - modify existing user
	r.Handle("/user/{id}", authSvrRouter)

	// routeStop service
	routeStopSvrRouter := ctx.NewProxy(routeStopSvrAddr)

	r.Handle("/route/ok/", routeStopSvrRouter)

	// {domain}/route/create: POST - create new route and save to db
	r.Handle("/route/create/", routeStopSvrRouter)

	// {domain}/route/all/: GET - get all routes available from the db
	r.Handle("/route/all/", routeStopSvrRouter)

	r.Handle("/route/nearby", routeStopSvrRouter)

	r.Handle("/route/tag", routeStopSvrRouter)

	// {domain}/route/{id}: PATCH - modify existing route
	// {domain}/route/{id}: GET - get route details
	r.Handle("/route/{route_id}", routeStopSvrRouter)

	// {domain}/route/{id}/comment: POST - post new comment
	r.Handle("/route/{route_id}/comment/", routeStopSvrRouter)

	// {domain}/route/{id}/comment/{id}: PATCH - modify existing comment
	// {domain}/route/{id}/comment/{id}: DELETE - delete existing comment
	// {domain}/route/{id}/comment/{id}: GET - get comment
	r.Handle("/route/comment/{comment_id}", routeStopSvrRouter)

	// {domain}/stop/create: POST - create new stop and save to db
	r.Handle("/stop/create/", routeStopSvrRouter)

	// {domain}/stop/{id}/comment: POST - post new comment
	r.Handle("/stop/{route_id}/comment/", routeStopSvrRouter)

	// {domain}/stop/{id}: PATCH - modify existing route
	// {domain}/stop/{id}: GET - get stop details
	r.Handle("/stop/{stop_id}", routeStopSvrRouter)

	// {domain}/stop/{id}/comment/{id}: PATCH - modify existing comment
	// {domain}/stop/{id}/comment/{id}: DELETE - delete existing comment
	// {domain}/stop/{id}/comment/{id}: GET - get comment
	r.Handle("/stop/comment/{comment_id}", routeStopSvrRouter)

	// booting service
	log.Printf("serving gateway at port %s!", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), common.NewLogger(r)))
}
