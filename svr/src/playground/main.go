package main

import (
	"TravelEasy/svr/src/model"
	"encoding/json"
	"log"
	"time"
)

func main() {
	newUser := model.UserProfile{
		Username:        "another_user",
		Password:        "123456",
		Email:           "another@user.com",
		FirstName:       "Another",
		LastName:        "User",
		DOB:             time.Now(),
		Gender:          "M",
		Points:          178,
		LocationCity:    "SZ",
		LocationState:   "GD",
		LocationCountry: "CH",
		Picture:         "nope",
	}

	b, _ := json.Marshal(newUser)
	log.Println(string(b))
}
