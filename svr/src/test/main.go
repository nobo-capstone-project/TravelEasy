package main

import (
	"TravelEasy/svr/src/config"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

func OkHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodConnect {
		http.Error(w, config.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}

	resp := fmt.Sprintf("Session server connected.")
	config.HttpWriter(http.StatusOK, []byte(resp), config.MimeText, w)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	router := mux.NewRouter()
	router.HandleFunc("/session/ok", OkHandler)
	log.Println("serving redis!")
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), router))
}