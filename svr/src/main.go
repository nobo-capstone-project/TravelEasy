package main

import (
	"TravelEasy/svr/src/db"
	"TravelEasy/svr/src/model"
	"context"
	"encoding/json"
	"log"
	"time"
)


func main() {
	ctx := context.Background()
	fs, err := db.NewApp(ctx)
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()

	// add new user
	newUser := model.UserProfile{
		Username:        "username",
		Password:        "password",
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

	up, err := fs.AddUser(&newUser)
	if err != nil {
		log.Fatalln("cannot add user:", err)
	} else {
		upStr, _ := json.Marshal(up)
		log.Println("user created:", string(upStr))
	}

	// modify this user
	modifyUser := model.UserProfile{
		DocumentID:      up.DocumentID,
		FirstName:       "Rick",
		LastName:        "Winslow",
		Picture:         "no pic",
	}
	up, err = fs.ModifyUser(&modifyUser)
	if err != nil {
		log.Fatalln("cannot modify user:", err)
	} else {
		upStr, _ := json.Marshal(up)
		log.Println("user modified:", string(upStr))
	}
}
