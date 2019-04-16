package main

import (
	db "TravelEasy/svr/src/db/redis/src"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {

	port := os.Getenv("PORT")
	if len(port) == 0 { port = ":8000" }

	redisAddr := os.Getenv("REDISADDR")
	if len(redisAddr) == 0 { redisAddr = "redis:6379" }

	sessionKey := os.Getenv("SESSIONKEY")
	if len(sessionKey) == 0 { sessionKey = "default_key" }

	sessionDuration := time.Hour * 24 * 30 // a month

	ctx := db.SessionContext{
		RedisStore: db.NewRedisStore(db.NewRedisClient(redisAddr), sessionDuration),
	}

	router := mux.NewRouter()
	router.HandleFunc("/session/ok", ctx.OkHandler)
	router.HandleFunc("/session", ctx.SessionHandler)

	log.Println("serving redis!")

	log.Fatal(http.ListenAndServe(port, router))
}