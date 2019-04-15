package db

import (
	"golang.org/x/net/context"
	"log"
	"testing"
)

func TestFirebaseStore_AddUser(t *testing.T) {
	ctx := context.Background()
	fs, err := NewApp(ctx)
	if err != nil {
		log.Fatalln("cannot create new app: ", err)
	}
	defer fs.CloseClient()


}