package model

import (
	"golang.org/x/crypto/bcrypt"
	"time"
)

type UserProfile struct {
	DocumentID      string    `json:"documentID,omitempty"`
	Username        string    `json:"username,omitempty"`
	Password        string    `json:"password,omitempty"`
	Email           string    `json:"email,omitempty"`
	FirstName       string    `json:"firstName,omitempty"`
	LastName        string    `json:"lastName,omitempty"`
	DOB             time.Time `json:"dob,omitempty"`
	Gender          string    `json:"gender,omitempty"`
	Points          int32     `json:"pts,omitempty"` // TODO: may not implement
	LocationCity    string    `json:"locationCity,omitempty"`
	LocationState   string    `json:"locationState,omitempty"`
	LocationCountry string    `json:"locationCountry,omitempty"`
	Picture         string    `json:"picture,omitempty"`
}

type UserFollower struct {
	DocumentID string   `json:"documentID"`
	UserID     string   `json:"userID"`
	FollowerID []string `json:"followerID"`
}

// TODO
type RouteBookmark struct {
	DocumentID string `json:"documentID"`
	UserID     string `json:"userID"`
	RouterID   string `json:"routeID"`
}

// TODO
type StopBookmark struct {
	DocumentID string `json:"documentID"`
	UserID     string `json:"userID"`
	StopID     string `json:"stopID"`
}

// generatePassword takes a plaintext and returns the salted hash
func GeneratePassword(pwd string) (string, error) {
	const cost = 13
	if h, err := bcrypt.GenerateFromPassword([]byte(pwd), cost); err != nil {
		return "", err
	} else {
		return string(h), nil
	}
}

func (up *UserProfile) AuthenticatePassword(pwd string) error {
	if err := bcrypt.CompareHashAndPassword([]byte(up.Password), []byte(pwd)); err != nil {
		return err
	} else {
		return nil
	}
}
