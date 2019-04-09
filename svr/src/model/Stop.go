package model

import "time"

type StopLoc struct {
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
	Picture      []string      `json:"pictureURL"`
	ADA          bool          `json:"ADA"`
}

type StopComment struct {
	StopCommentID  string    `json:"stopCommentID"`
	StopID         string    `json:"stopID"`
	Comment        string    `json:"comment"`
	CreatorID      string    `json:"creatorID"`
	SubmissionTime time.Time `json:"submissionTime"`
	EditTime       time.Time `json:"editTime"`
	Vote           int32     `json:"vote"`
}