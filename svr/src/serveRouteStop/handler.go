package main

import (
	"TravelEasy/svr/src/common"
	"TravelEasy/svr/src/model"
	"dazzling/session"
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
	"strings"
)

func (ctx *RouteContext) routeCreateHandler(w http.ResponseWriter, r *http.Request) {

	// check session
	_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	switch r.Method {
	case http.MethodPost:

		// check header
		if !strings.HasPrefix(r.Header.Get(common.HeaderContentType), common.MimeJSON) {
			http.Error(w, common.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// parse body
		var route model.RouteLoc
		if err := json.NewDecoder(r.Body).Decode(&route); err != nil {
			http.Error(w, err.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// write to db
		res, err := ctx.db.AddRouteLoc(&route)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// write to client
		b, _ := json.Marshal(res)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)
		return

	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

func (ctx *RouteContext) stopCreateHandler(w http.ResponseWriter, r *http.Request) {

	// check session
	_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
		if err != nil {
			http.Error(w, err.Error(), http.StatusUnauthorized)
			return
		}

	switch r.Method {
	case http.MethodPost:

		// check header
		if !strings.HasPrefix(r.Header.Get(common.HeaderContentType), common.MimeJSON) {
			http.Error(w, common.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// parse body
		var stop model.StopLoc
		if err := json.NewDecoder(r.Body).Decode(&stop); err != nil {
			http.Error(w, err.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// write to db
		res, err := ctx.db.AddStopLoc(&stop)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// write to client
		b, _ := json.Marshal(res)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)
		return

	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

func (ctx *RouteContext) routeCommentCreateHandler(w http.ResponseWriter, r *http.Request) {

	// check session
		_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
		if err != nil {
			http.Error(w, err.Error(), http.StatusUnauthorized)
			return
		}

	switch r.Method {
	case http.MethodPost:
		// check header
		if !strings.HasPrefix(r.Header.Get(common.HeaderContentType), common.MimeJSON) {
			http.Error(w, common.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// check param
		routeID := mux.Vars(r)["route_id"]
		if len(routeID) == 0 {
			http.Error(w, http.ErrNoLocation.Error(), http.StatusBadRequest)
			return
		}

		// decode body
		var routeComment model.RouteComment
		if err := json.NewDecoder(r.Body).Decode(&routeComment); err != nil {
			http.Error(w, err.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// add parent ID
		routeComment.RouteID = routeID

		// write to db
		res, err := ctx.db.AddRouteComment(&routeComment)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// write to client
		b, _ := json.Marshal(res)
		common.HttpWriter(http.StatusCreated, b, common.MimeJSON, w)
		return

	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

func (ctx *RouteContext) stopCommentCreateHandler(w http.ResponseWriter, r *http.Request) {

	// check session
	_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	switch r.Method {
	case http.MethodPost:
		// check header
		if !strings.HasPrefix(r.Header.Get(common.HeaderContentType), common.MimeJSON) {
			http.Error(w, common.ErrUnsupportedMediaType.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// check param
		stopID := mux.Vars(r)["stop_id"]
		if len(stopID) == 0 {
			http.Error(w, http.ErrNoLocation.Error(), http.StatusBadRequest)
			return
		}

		// decode body
		var stopComment model.StopComment
		if err := json.NewDecoder(r.Body).Decode(&stopComment); err != nil {
			http.Error(w, err.Error(), http.StatusUnsupportedMediaType)
			return
		}

		// add parent ID
		stopComment.StopID = stopID

		// write to db
		res, err := ctx.db.AddStopComment(&stopComment)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// write to client
		b, _ := json.Marshal(res)
		common.HttpWriter(http.StatusCreated, b, common.MimeJSON, w)
		return
	}
}

func (ctx *RouteContext) specificRouteHandler(w http.ResponseWriter, r *http.Request) {

	// check session
	_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	// check param
	routeID := mux.Vars(r)["route_id"]
	if len(routeID) == 0 {
		http.Error(w, http.ErrNoLocation.Error(), http.StatusBadRequest)
		return
	}

	switch r.Method {
	case http.MethodGet:

		// get route
		routeLoc, err := ctx.db.GetSpecificRoute(routeID)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// write to client
		b, _ := json.Marshal(routeLoc)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)
		return

	case http.MethodPatch:
	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

func (ctx *RouteContext) specificStopHandler(w http.ResponseWriter, r *http.Request) {

	// check session
	_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	// check param
	stopID := mux.Vars(r)["stop_id"]
	if len(stopID) == 0 {
		http.Error(w, http.ErrNoLocation.Error(), http.StatusBadRequest)
		return
	}

	switch r.Method {
	case http.MethodGet:

		// get route
		stopLoc, err := ctx.db.GetSpecificStop(stopID)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// write to client
		b, _ := json.Marshal(stopLoc)
		common.HttpWriter(http.StatusOK, b, common.MimeJSON, w)
		return

	case http.MethodPatch:
	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}

}

func (ctx *RouteContext) specificRouteCommentHandler(w http.ResponseWriter, r *http.Request) {

	// check session
	_, err := session.GetState(r, ctx.key, ctx.redis, &session.State{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	switch r.Method {
	case http.MethodGet:
	case http.MethodPatch:
	case http.MethodDelete:
	default:
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}
}

func (ctx *RouteContext) specificStopCommentHandler(w http.ResponseWriter, r *http.Request) {

}