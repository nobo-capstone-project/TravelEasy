package model

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type StopLoc struct {
	DocumentID	 string		   `json:"documentID"`
	StopID       string        `json:"stopID"`
	OrderID      int8          `json:"orderID"`
	Latitude     float64       `json:"latitude"`
	Longitude    float64       `json:"longitude"`
	StopName     string        `json:"stopName"`
	LocationName string        `json:"locationName"`
	Description  string        `json:"description"`
	Address      string        `json:"address"`
	Type         []string      `json:"type"`
	TimeSpent    time.Duration `json:"timeSpent"`
	Picture      []bson.Binary `json:"picture"`
	ADA          bool          `json:"ADA"`
}

type StopComment struct {
	DocumentID  string    `json:"documentID"`
	StopID         string    `json:"stopID"`
	Comment        string    `json:"comment"`
	CreatorID      string    `json:"creatorID"`
	SubmissionTime time.Time `json:"submissionTime"`
	EditTime       time.Time `json:"editTime"`
	Vote           int32     `json:"vote"`
}
