package main

import (
	"TravelEasy/svr/src/api"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	ctx := api.Context{}

	// {domain}/user/create: POST - create new user and save to db
	router.HandleFunc("/user/create", ctx.UserCreateHandler)
	// {domain}/user/{id}: GET - retrieve user profile
	// {domain}/user/{id}: PATCH - modify existing user
	router.HandleFunc("/user/{id}", ctx.UserGetHandler)
	// {domain}/user/auth: POST - log in current user
	// {domain}/user/auth: DELETE - log out current user
	router.HandleFunc("/user/auth", ctx.UserAuthHandler)
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
