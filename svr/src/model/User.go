package model

import "time"

type UserProfile struct {
	UserID          string    `json:"userID"`
	Username        string    `json:"username"`
	Password        string    `json:"password"`
	PasswordConf    string    `json:"passwordConf"`
	Email           string    `json:"email"`
	FirstName       string    `json:"firstName"`
	LastName        string    `json:"lastName"`
	DOB             time.Time `json:"dob"`
	Gender          string    `json:"gender"`
	Points          int32     `json:"pts"`
	LocationCity    string    `json:"locationCity"`
	LocationState   string    `json:"locationState"`
	LocationCountry string    `json:"locationCountry"`
	PictureURL      string    `json:"pictureURL"` // upload pic?
}

type UserFollower struct {
	UserID     string   `json:"userID"`
	FollowerID []string `json:"followerID"`
}

type RouteBookmark struct {
	UserID   string `json:"userID"`
	RouterID string `json:"routeID"`
}

type StopBookmark struct {
	UserID string `json:"userID"`
	StopID string `json:"stopID"`
}