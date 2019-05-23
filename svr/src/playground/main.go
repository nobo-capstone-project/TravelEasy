package main

import (
	"TravelEasy/svr/src/model"
	"encoding/json"
	"fmt"
)

func main() {
	a := model.RouteLoc{
		DocumentID:  "",
		RouteID:     "1",
		CreatorID:   "1",
		Description: "123",
		StopID:      []string{"1","2","3"},
		Category:    []string{"leisure","culture"},
		Picture:     []string{"nothing yet"},
		Vote:        0,
	}

	//a := model.UserProfile{
	//	DocumentID:      "",
	//	Username:        "bryoco",
	//	Password:        "123456",
	//	Email:           "bryoco@asd.com",
	//	FirstName:       "rico",
	//	LastName:        "w",
	//	DOB:             time.Time{},
	//	Gender:          "M",
	//	Points:          0,
	//	LocationCity:    "sea",
	//	LocationState:   "wa",
	//	LocationCountry: "us",
	//	Picture:         "non",
	//}

	//a := model.StopLoc{
	//	DocumentID:   "",
	//	StopID:       "123",
	//	OrderID:      0,
	//	Latitude:     0,
	//	Longitude:    0,
	//	StopName:     "123",
	//	LocationName: "123",
	//	Description:  "123",
	//	Address:      "123",
	//	Type:         []string{"college", "food"},
	//	TimeSpent:    10,
	//	Picture:      []string{"nothing yet"},
	//	ADA:          false,
	//}

	b, _ := json.Marshal(a)
	fmt.Println(string(b))
}
