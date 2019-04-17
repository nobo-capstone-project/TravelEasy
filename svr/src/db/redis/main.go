package main

import (
	"fmt"
	"github.com/bryoco/dazzling/session"
	"github.com/gorilla/mux"
	"github.com/pkg/errors"
	"log"
	"net/http"
	"os"
	"time"
)

type Context struct {
	redis *session.RedisStore
}

var ErrMethodNotAllowed = errors.New("method not allowed")
var ErrNotYetImplemented = errors.New("not yet implemented")

func (ctx *Context) OkHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}

	ping, err := ctx.redis.Client.Ping().Result()
	var resp string
	if err != nil {
		resp = fmt.Sprintf("Session server not connected, redis error: %v", err)
	} else {
		resp = fmt.Sprintf("Session server connected, redis ping: %v", ping)
	}

	httpWriter(http.StatusOK, []byte(resp), "text/plain", w)
}

func (ctx *Context) SessionHandler(w http.ResponseWriter, r *http.Request) {

	// validate RedisRequest

	switch r.Method {
	case http.MethodGet:
		//ctx.RedisStore.Get()
		http.Error(w, ErrNotYetImplemented.Error(), http.StatusMethodNotAllowed)
		return
	case http.MethodPost:
		//ctx.RedisStore.Put()
		http.Error(w, ErrNotYetImplemented.Error(), http.StatusMethodNotAllowed)
		return
	default:
		http.Error(w, ErrNotYetImplemented.Error(), http.StatusMethodNotAllowed)
		return
	}
}

// HttpWriter takes necessary arguments to write back to client.
func httpWriter(statusCode int, body []byte, contentType string, w http.ResponseWriter) {
	if len(contentType) > 0 {
		w.Header().Set("Content-Type", contentType)
	} else {
		w.Header().Set("Content-Type", "text/plain")
	}

	w.WriteHeader(statusCode)

	if len(body) > 0 {
		_, _ = w.Write(body)
	}
}

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	redisAddr := os.Getenv("REDISADDR")
	if len(redisAddr) == 0 {
		redisAddr = "redis:6379"
	}

	sessionKey := os.Getenv("SESSIONKEY")
	if len(sessionKey) == 0 {
		sessionKey = "default_key"
	}

	sessionDuration := time.Hour * 24 * 30 // a month

	ctx := Context{
		redis: session.NewRedisStore(session.NewRedisClient(redisAddr), sessionDuration),
	}

	router := mux.NewRouter()
	router.HandleFunc("/session/ok", ctx.OkHandler)
	router.HandleFunc("/session", ctx.SessionHandler)

	log.Printf("serving redis at port %s!", port)

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), router))
}
