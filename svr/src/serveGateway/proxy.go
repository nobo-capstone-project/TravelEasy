package main

import (
	"log"
	"net/http"
	"net/http/httputil"
)

func (ctx *gatewayContext) NewProxy(addr string) *httputil.ReverseProxy {
	log.Println("creating proxy at: " + addr)
	return &httputil.ReverseProxy{
		Director: func(r *http.Request) {
			r.Host = addr
			r.URL.Host = addr
			r.URL.Scheme = "http"
		},
	}
}