package db

import (
	"TravelEasy/svr/src/config"
	"fmt"
	"net/http"
)

type SessionContext struct {
	RedisStore	*RedisStore
}

func (ctx *SessionContext) OkHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodConnect {
		http.Error(w, config.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}

	ping, _ := ctx.RedisStore.Client.Ping().Result()
	resp := fmt.Sprintf("Session server connected, redis ping: %v", ping)

	config.HttpWriter(http.StatusOK, []byte(resp), config.MimeText, w)
}

func (ctx *SessionContext) SessionHandler(w http.ResponseWriter, r *http.Request) {

	// validate RedisRequest

	switch r.Method {
	case http.MethodGet:
		//ctx.RedisStore.Get()
		http.Error(w, config.ErrNotYetImplemented.Error(), http.StatusMethodNotAllowed)
		return
	case http.MethodPost:
		//ctx.RedisStore.Put()
		http.Error(w, config.ErrNotYetImplemented.Error(), http.StatusMethodNotAllowed)
		return
	default:
		http.Error(w, config.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}