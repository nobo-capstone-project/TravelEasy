package db

import (
	"TravelEasy/svr/src/model"
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

func TestFirebaseStore_AddUser(t *testing.T) {
	ctx := context.Background()
	fs, err := NewApp(ctx)
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

}