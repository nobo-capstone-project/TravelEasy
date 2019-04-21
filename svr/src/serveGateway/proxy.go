package main

import (
	"github.com/bryoco/dazzling/session"
	"net/http"
	"net/http/httputil"
	"sync"
)

func (ctx *GatewayContext) NewProxy(addr string) *httputil.ReverseProxy {
	// thread locking
	mx := sync.Mutex{}
	mx.Lock()
	defer mx.Unlock()

	// get current state
	currentState := &session.State{}

	// first ignore `GetState` error as getting summary does not require users to be authorized
	_, _ = session.GetState(r, ctx.key, ctx., currentState)

	return &httputil.ReverseProxy{
		Director: func(r *http.Request) {
			r.Host = addr
			r.URL.Host = addr
			r.URL.Scheme = "http"
		},
	}
}