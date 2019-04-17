package main

import (
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/model"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

func OkHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodConnect {
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}

	resp := fmt.Sprintf("Session server connected.")
	common.HttpWriter(http.StatusOK, []byte(resp), common.MimeText, w)
}

func main() {
	//port := os.Getenv("PORT")
	//if port == "" {
	//	port = "8080"
	//}
	//router := mux.NewRouter()
	//router.HandleFunc("/session/ok", OkHandler)
	//log.Println("serving redis!")
	//log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), router))
	newUser := model.UserProfile{
		Username:        "username",
		Password:        "123",
		Email:           "email2@email.com",
		FirstName:       "Testing",
		LastName:        "Tester",
		DOB:             time.Now(),
		Gender:          "M",
		Points:          0,
		LocationCity:    "Sea",
		LocationState:   "WA",
		LocationCountry: "US",
		Picture:         "123",
	}

	newUser.Password = ""

	js, _ := json.Marshal(newUser)
	log.Println(string(js))
}