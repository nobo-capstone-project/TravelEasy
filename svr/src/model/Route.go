package model

import (
	"time"
)

type RouteLoc struct {
	DocumentID  string   `json:"documentID"`
	RouteID     string   `json:"routeID"`
	CreatorID   string   `json:"creatorID"`
	Description string   `json:"description"`
	StopID      []string `json:"stopID"`
	Category    []string `json:"category"`
	Picture     []string `json:"picture"`
	Vote        int32    `json:"vote"`
}

type RouteComment struct {
	DocumentID     string    `json:"documentID"`
	RouteID        string    `json:"routeID"`
	Comment        string    `json:"comment"`
	CreatorID      string    `json:"creatorID"`
	SubmissionTime time.Time `json:"submissionTime"`
	EditTime       time.Time `json:"editTime"`
	Vote           int32     `json:"vote"`
}
