package api

import (
	"TravelEasy/svr/src/config"
	"TravelEasy/svr/src/model"
	"encoding/json"
	"github.com/gorilla/mux"
	"io"
	"net/http"
	"strings"
)

func (ctx *Context) UserCreateHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost:

		if !strings.HasPrefix(r.Header.Get("Content-Type"), "application/json") {
			http.Error(w, config.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		u, err := userProfileDecoder(r.Body)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		res, err := ctx.FirebaseStore.AddUser(u)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		b, _ := json.Marshal(res)
		config.HttpWriter(http.StatusOK, b, "application/json", w)
		return

	default:
		http.Error(w, config.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

func (ctx *Context) UserGetHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:

		id := mux.Vars(r)["id"]
		// TODO
		ctx.FirebaseStore.GetUserProfileByUsername(id)


	case http.MethodPost:
	default:
		http.Error(w, config.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

func userProfileDecoder(d io.ReadCloser) (*model.UserProfile, error) {
	decoder := json.NewDecoder(d)
	var i model.UserProfile
	if err := decoder.Decode(&i); err != nil {
		return nil, err
	} else {
		return &i, nil
	}
}

