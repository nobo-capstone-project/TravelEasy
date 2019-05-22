package db

import (
	"TravelEasy/svr/src/model"
	"encoding/json"
	"golang.org/x/net/context"
	"log"
	"testing"
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

func TestFirebaseStore(t *testing.T) {
	ctx := context.Background()
	fs, err := NewApp(ctx, "/home/ryocown/go/src/TravelEasy/svr/src/serveAuth/firestore_key.json")
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()

	up, err := fs.GetUserProfileByDocumentID("NqabjKC15cb688AsjD0a")
	if err != nil {
		log.Println(err)
	} else {
		b, _ := json.Marshal(up)
		log.Println(string(b))
	}
}
