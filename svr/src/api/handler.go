package api

import (
	"TravelEasy/svr/src/model"
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/pkg/errors"
	"io"
	"net/http"
	"strings"
)

var (
	ErrUnsupportedMediaType = errors.New("unsupported media type")
	ErrInvalidCredentials   = errors.New("invalid credentials")
	ErrMethodNotAllowed     = errors.New("method not allowed")
)

func (ctx *Context) UserCreateHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost:

		if !strings.HasPrefix(r.Header.Get("Content-Type"), "application/json") {
			http.Error(w, ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
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
		httpWriter(http.StatusOK, b, "application/json", w)
		return

	default:
		http.Error(w, ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
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
		http.Error(w, ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
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

// HttpWriter takes necessary arguments to write back to client.
func httpWriter(statusCode int, body []byte, contentType string, w http.ResponseWriter) {
	if len(contentType) > 0 {
		w.Header().Set("Content-Type", contentType)
	} else {
		w.Header().Set("Content-Type", "text/plain")
	}

	w.WriteHeader(statusCode)

	if len(body) > 0 {
		_, _ = w.Write(body)
	}
}