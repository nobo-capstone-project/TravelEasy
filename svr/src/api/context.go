package api

import (
	"TravelEasy/svr/src/db"
	"net/http"
	"net/http/httputil"
	"sync"
)

type Context struct {
	FirebaseStore	*db.FirestoreStore
	Key				string
}

func (ctx *Context) NewProxy(addr string) *httputil.ReverseProxy {
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