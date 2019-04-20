package main

import (
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/db"
	"fmt"
	"github.com/gorilla/mux"
	"golang.org/x/net/context"
	"log"
	"net/http"
	"net/http/httputil"
	"sync"
)

type GatewayContext struct {
	FirebaseStore	*db.FirestoreStore
	Key				string
}

func (ctx *GatewayContext) NewProxy(addr string) *httputil.ReverseProxy {
	// thread locking
	mx := sync.Mutex{}
	mx.Lock()
	defer mx.Unlock()

	return &httputil.ReverseProxy{
		Director: func(r *http.Request) {
			r.Host = addr
			r.URL.Host = addr
			r.URL.Scheme = "http"
		},
	}
}

func main() {

	port := common.GetEnvPort()
	redisAddr := common.GetEnvRedisAddr()
	sessionKey := common.GetEnvSessionKey()
	firestoreKeyPath := common.GetEnvFirestoreKeyPath()
	// TODO: combine route and stop server
	routeSvrAddr := common.GetEnvRouteSvrAddr()
	stopSvrAddr := common.GetEnvStopSvrAddr()

	fs, err := db.NewApp(context.Background(), firestoreKeyPath)
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()

	router := mux.NewRouter()
	ctx := GatewayContext{
		FirebaseStore: fs,
		Key:           sessionKey,
	}

	// auth service
	authRouter := ctx.NewProxy(redisAddr)
	// {domain}/user/auth: POST - log in current user
	// {domain}/user/auth: DELETE - log out current user
	router.Handle("/user/auth", authRouter)
	// {domain}/user/create: POST - create new user and save to db
	router.Handle("/user/create", authRouter)
	router.Handle("/session/ok", authRouter)
	// {domain}/user/{id}: GET - retrieve user profile
	// {domain}/user/{id}: PATCH - modify existing user
	router.Handle("/user/{user_id}/", authRouter)

	// route service
	routeRouter := ctx.NewProxy(routeSvrAddr)
	// {domain}/route/create: POST - create new route and save to db
	router.Handle("/route/create", routeRouter)
	// {domain}/route/{id}: PATCH - modify existing route
	// {domain}/route/{id}: GET - get route details
	router.Handle("/route/{route_id}", routeRouter)
	// {domain}/route/{id}/comment: POST - post new comment
	// {domain}/route/{id}/comment/{id}: PATCH - modify existing comment
	// {domain}/route/{id}/comment/{id}: DELETE - delete existing comment
	// {domain}/route/{id}/comment/{id}: GET - get comment
	router.Handle("/route/{route_id}/comment/{comment_id}", routeRouter)

	// stop service
	stopRouter := ctx.NewProxy(stopSvrAddr)
	// {domain}/stop/create: POST - create new stop and save to db
	router.Handle("/stop/create", stopRouter)
	// {domain}/stop/{id}: PATCH - modify existing route
	// {domain}/stop/{id}: GET - get stop details
	router.Handle("/route/{stop_id}", stopRouter)
	// {domain}/stop/{id}/comment: POST - post new comment
	// {domain}/stop/{id}/comment/{id}: PATCH - modify existing comment
	// {domain}/stop/{id}/comment/{id}: DELETE - delete existing comment
	// {domain}/stop/{id}/comment/{id}: GET - get comment
	router.Handle("/route/{stop_id}/comment/{comment_id}", routeRouter)

	// booting service
	log.Printf("serving gateway at port %s!", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), router))
}