package main

import (
	"TravelEasy/svr/src/api"
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/db"
	"fmt"
	"github.com/gorilla/mux"
	"golang.org/x/net/context"
	"log"
	"net/http"
)

func main() {

	port := common.GetEnvPort()
	redisAddr := common.GetEnvRedisAddr()
	sessionKey := common.GetEnvSessionKey()
	firestoreKeyPath := common.GetEnvFirestoreKeyPath()

	fs, err := db.NewApp(context.Background(), firestoreKeyPath)
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()

	router := mux.NewRouter()
	ctx := api.Context{
		FirebaseStore: fs,
		Key:           sessionKey,
	}

	// {domain}/user/auth: POST - log in current user
	// {domain}/user/auth: DELETE - log out current user
	authRouter := ctx.NewProxy(redisAddr)
	router.Handle("/user/auth", authRouter)
	// {domain}/user/create: POST - create new user and save to db
	router.Handle("/user/create", authRouter)
	// {domain}/session/ok: GET - PING auth server
	router.Handle("/session/ok", authRouter)

	// {domain}/user/{id}: GET - retrieve user profile
	// {domain}/user/{id}: PATCH - modify existing user
	router.HandleFunc("/user/{id}/", ctx.UserGetHandler)

	log.Printf("serving gateway at port %s!", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), router))
}

// User Service
//
// Router Service
//    {domain}/route/create: POST - create new route and save to db
//    {domain}/route/{id}: PATCH - modify existing route
//    {domain}/route/{id}: GET - get route details
//    {domain}/route/{id}/comment: POST - post new comment
//    {domain}/route/{id}/comment/{id}: PATCH - modify existing comment
//    {domain}/route/{id}/comment/{id}: DELETE - delete existing comment
//    {domain}/route/{id}/comment/{id}: GET - get comment
//
//    {domain}/stop/create: POST - create new stop and save to db
//    {domain}/stop/{id}: PATCH - modify existing route
//    {domain}/stop/{id}: GET - get stop details
//    {domain}/stop/{id}/comment: POST - post new comment
//    {domain}/stop/{id}/comment/{id}: PATCH - modify existing comment
//    {domain}/stop/{id}/comment/{id}: DELETE - delete existing comment
//    {domain}/stop/{id}/comment/{id}: GET - get comment
