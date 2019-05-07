package main

import (
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/db"
	"dazzling/session"
	"fmt"
	"github.com/gorilla/mux"
	"golang.org/x/net/context"
	"log"
	"net/http"
	"time"
)

// context for authentication server
type RouteContext struct {
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

	ctx := RouteContext{
		redis: session.NewRedisStore(session.NewRedisClient(redisAddr), time.Hour*24*30),
		key:   sessionKey,
		db:    fs,
	}

	r := mux.NewRouter()

	r.HandleFunc("/route/ok/", ctx.okHandler)

	// {domain}/route/create/: POST - create new route and save to db
	r.HandleFunc("/route/create/", ctx.routeCreateHandler)

	// {domain}/route/{id}: PATCH - modify existing route
	// {domain}/route/{id}: GET - get route details
	r.HandleFunc("/route/{route_id}", ctx.specificRouteHandler)

	// {domain}/route/{id}/comment/: POST - post new comment
	r.HandleFunc("/route/{route_id}/comment/", ctx.routeCommentCreateHandler)

	// {domain}/route/{id}/comment/{id}: GET - get comment
	// {domain}/route/{id}/comment/{id}: PATCH - modify existing comment
	// {domain}/route/{id}/comment/{id}: DELETE - delete existing comment
	r.HandleFunc("/route/comment/{comment_id}", ctx.specificRouteCommentHandler)

	// {domain}/stop/create: POST - create new stop and save to db
	r.HandleFunc("/stop/create/", ctx.stopCreateHandler)

	// {domain}/stop/{id}: PATCH - modify existing route
	// {domain}/stop/{id}: GET - get stop details
	r.HandleFunc("/stop/{stop_id}/comment/", ctx.specificStopHandler)

	// {domain}/stop/{id}/comment: POST - post new comment
	r.HandleFunc("/stop/{stop_id}", ctx.stopCommentCreateHandler)

	// {domain}/stop/comment/{id}: GET - get comment
	// {domain}/stop/comment/{id}: PATCH - modify existing comment
	// {domain}/stop/comment/{id}: DELETE - delete existing comment
	r.HandleFunc("/stop/comment/{comment_id}", ctx.specificStopCommentHandler)

	log.Printf("serving route/stop at port %s!", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), common.NewLogger(r)))
}
