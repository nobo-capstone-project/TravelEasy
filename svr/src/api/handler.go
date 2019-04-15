package api

import "net/http"

func (ctx *Context) LoginHandler(w http.ResponseWriter, r *http.Request) {
	var username, password string

	up, err := ctx.FirebaseStore.GetUserProfileByUsername(username)
	if err != nil {
		// write error message
	}

	if err := up.AuthenticatePassword(password); err != nil {
		// wrong password, write error message
	}
}