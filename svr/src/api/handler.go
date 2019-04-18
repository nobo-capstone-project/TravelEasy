package api

import (
	"TravelEasy/svr/src/common"
	"net/http"
)

func (ctx *Context) UserGetHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:

		http.Error(w, common.ErrNotYetImplemented.Error(), http.StatusNotImplemented)
		return

	case http.MethodPost:

		http.Error(w, common.ErrNotYetImplemented.Error(), http.StatusNotImplemented)
		return

	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}