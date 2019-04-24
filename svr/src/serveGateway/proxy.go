package main

import (
	"net/http"
	"net/http/httputil"
)

func (ctx *GatewayContext) NewProxy(addr string) *httputil.ReverseProxy {
	return &httputil.ReverseProxy{
		Director: func(r *http.Request) {
			r.Host = addr
			r.URL.Host = addr
			r.URL.Scheme = "http"
		},
	}
}