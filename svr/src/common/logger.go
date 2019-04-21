package common

import (
	"log"
	"net/http"
	"time"
)

type Logger struct {
	handler http.Handler
}

func (l *Logger) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	//w.Header().Set("Access-Control-Allow-Origin", "*")
	//w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE")
	//w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	//w.Header().Set("Access-Control-Expose-Headers", "Authorization")

	start := time.Now()
	l.handler.ServeHTTP(w, r)

	log.Printf("%s %s %v", r.Method, r.URL.String(), time.Since(start))
}

func NewLogger(h http.Handler) *Logger {
	return &Logger{h}
}
