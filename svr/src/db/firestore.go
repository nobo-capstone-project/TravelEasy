package db

import (
	"TravelEasy/svr/src/model"
	"cloud.google.com/go/firestore"
	"encoding/json"
	"firebase.google.com/go"
	"fmt"
	"golang.org/x/net/context"
	"google.golang.org/api/option"
)

const (
	userDB    = "user"
	routeDB   = "route"
	stopDB    = "stop"
	commentDB = "comment"
)

var (
	ErrEmailUsed    = fmt.Errorf("email used")
	ErrUsernameUsed = fmt.Errorf("username used")
)

type FirestoreStore struct {
	AppClient		*firestore.Client
	Context			*context.Context
}

// establishes connection with firestore and returns a FirestoreStore struct pointer
func NewApp(ctx context.Context, credPath string) (*FirestoreStore, error) {
	if credPath == "" {
		credPath = "/home/ryocown/.ssh/traveleasy-1554765588100-firebase-adminsdk-pxlbj-5c2e782b09.json"
	}
	opt := option.WithCredentialsFile(credPath)
	config := &firebase.Config{ProjectID: "traveleasy-1554765588100"}

	app, err := firebase.NewApp(ctx, config, opt)
	if err != nil {
		return nil, err
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		return nil, err
	}

	return &FirestoreStore{client, &ctx}, nil
}

// wrapper to closes client
func (fs *FirestoreStore) CloseClient() {
	_ = fs.AppClient.Close()
}

func (fs *FirestoreStore) AddUser(user *model.UserProfile) (*model.UserProfile, error) {

	err := fs.identifierIsUnused(user)
	if err != nil {
		return nil, err
	}

	h, err := model.GeneratePassword(user.Password)
	if err != nil {
		return nil, err
	}

	user.Password = h

	m, err := cleanUnusedFields(user)
	if err != nil {
		return nil, err
	}

	ref, _, err := fs.AppClient.Collection(userDB).Add(*fs.Context, m)
	if err != nil {
		return nil, err
	} else {
		user.DocumentID = ref.ID
		return user, nil
	}
}

func (fs *FirestoreStore) AddRouteLoc(routeLoc *model.RouteLoc) (*model.RouteLoc, error) {
	ref, _, err := fs.AppClient.Collection(routeDB).Add(*fs.Context, routeLoc)
	if err != nil {
		return nil, err
	} else {
		routeLoc.DocumentID = ref.ID
		return routeLoc, nil
	}
}

func (fs *FirestoreStore) AddStopLoc(stopLoc *model.StopLoc) (*model.StopLoc, error) {
	ref, _, err := fs.AppClient.Collection(stopDB).Add(*fs.Context, stopLoc)
	if err != nil {
		return nil, err
	} else {
		stopLoc.DocumentID = ref.ID
		return stopLoc, nil
	}
}

func (fs *FirestoreStore) AddRouteComment(routeComment *model.RouteComment) (*model.RouteComment, error) {
	ref, _, err := fs.AppClient.Collection(commentDB).Add(*fs.Context, routeComment)
	if err != nil {
		return nil, err
	} else {
		routeComment.DocumentID = ref.ID
		return routeComment, nil
	}
}

func (fs *FirestoreStore) AddStopComment(stopComment *model.StopComment) (*model.StopComment, error) {
	ref, _, err := fs.AppClient.Collection(commentDB).Add(*fs.Context, stopComment)
	if err != nil {
		return nil, err
	} else {
		stopComment.DocumentID = ref.ID
		return stopComment, nil
	}
}

func (fs *FirestoreStore) ModifyUser(user *model.UserProfile) (*model.UserProfile, error) {
	documentID := user.DocumentID
	user.DocumentID = ""

	m, err := cleanUnusedFields(user)
	if err != nil {
		return nil, err
	}

	_, err = fs.AppClient.Collection(userDB).Doc(documentID).Set(*fs.Context, m, firestore.MergeAll)
	if err != nil {
		return nil, err
	}

	// set does not return updated results, therefore, manually lookup after the update
	doc, err := fs.AppClient.Collection(userDB).Doc(documentID).Get(*fs.Context)
	if err != nil {
		return nil, err
	}

	return parseDataSnapshotToUserProfile(doc)
}

func (fs *FirestoreStore) GetUserProfileByDocumentID(documentID string) (*model.UserProfile, error) {

	doc, err := fs.AppClient.Collection(userDB).
		Doc("NqabjKC15cb688AsjD0a").
		Get(*fs.Context)

	if doc == nil {
		return nil, fmt.Errorf("user not found")
	}

	if err != nil {
		return nil, err
	}

	return parseDataSnapshotToUserProfile(doc)
}

func (fs *FirestoreStore) GetUserProfileByUsername(username string) (*model.UserProfile, error) {
	doc, err := fs.AppClient.Collection(userDB).
		Where("username", "==", username).
		Documents(*fs.Context).
		Next()

	if doc == nil {
		return nil, fmt.Errorf("user not found")
	}

	if err != nil {
		return nil, err
	}

	return parseDataSnapshotToUserProfile(doc)
}

func (fs *FirestoreStore) identifierIsUnused(user *model.UserProfile) error {
	username := user.Username
	email := user.Email

	doc, err := fs.AppClient.Collection(userDB).
		Where("username", "==", username).
		Documents(*fs.Context).
		Next()

	if doc != nil || err == nil {
		return ErrUsernameUsed
	}

	doc, err = fs.AppClient.Collection(userDB).
		Where("email", "==", email).
		Documents(*fs.Context).
		Next()

	if doc != nil || err == nil {
		return ErrEmailUsed
	}

	return nil
}

func parseDataSnapshotToUserProfile(d *firestore.DocumentSnapshot) (*model.UserProfile, error) {
	up := &model.UserProfile{}
	b, err := json.Marshal(d.Data())
	if err != nil {
		return nil, err
	}

	err = json.Unmarshal(b, up)
	if err != nil {
		return nil, err
	}

	up.DocumentID = d.Ref.ID

	return up, nil
}

// strips off empty fields from `UserProfile` struct and prepares for DB insertion
func cleanUnusedFields(i interface{}) (map[string]interface{}, error) {
	userStr, _ := json.Marshal(i)
	var m map[string]interface{}
	err := json.Unmarshal(userStr, &m)

	// strips off default date
	if val, ok := m["dob"]; ok {
		if val == "0001-01-01T00:00:00Z" {
			delete(m, "dob")
		}
	}

	if err != nil {
		return nil, err
	} else {
		return m, nil
	}
}