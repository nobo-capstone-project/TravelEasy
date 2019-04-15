package main

import (
	"TravelEasy/svr/src/db"
	"TravelEasy/svr/src/model"
	"context"
	"encoding/json"
	"log"
	"time"
)

var (
	validProfile = model.UserProfile{
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
)

func main() {
	ctx := context.Background()
	fs, err := db.NewApp(ctx)
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()

	cases := []struct {
		name           string
		profile        model.UserProfile
		expectError    bool
		expectedResult model.UserProfile
	} {
		{
			name:           "happy case",
			profile:        validProfile,
			expectError:    false,
			expectedResult: validProfile,
		},
		{
			name:           "used username",
			profile:        validProfile,
			expectError:    true,
			expectedResult: nil,
		},
		{
			name:           "used email",
			profile:        model.UserProfile{},
			expectError:    true,
			expectedResult: model.UserProfile{},
		},
	}

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

	// TODO: to write tests
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
