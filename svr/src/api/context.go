package api

import "TravelEasy/svr/src/db"

type Context struct {
	FirebaseStore	*db.FirestoreStore
}