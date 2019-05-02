package main

import (
	"net/http"
	"net/http/httputil"
)

func (ctx *gatewayContext) NewProxy(addr string) *httputil.ReverseProxy {
	thread <- 1
	return &httputil.ReverseProxy{
		Director: func(r *http.Request) {
			r.Host = addr
			r.URL.Host = addr
			r.URL.Scheme = "http"
		},
	}
}