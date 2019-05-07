package main

import (
	"TravelEasy/svr/src/common"
	"fmt"
	"net/http"
)

func (ctx *gatewayContext) OkHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, common.ErrMethodNotAllowed.Error(), http.StatusMethodNotAllowed)
		return
	}

	if pong, err := ctx.redis.Client.Ping().Result(); err != nil {
		common.HttpWriter(http.StatusInternalServerError,
			[]byte(fmt.Sprintf("Gateway server not connected to redis, redis error: %v", err)),
			common.MimeText, w)
	} else {
		common.HttpWriter(http.StatusOK,
			[]byte(fmt.Sprintf("Gateway server connected to redis, ping redis: %v", pong)),
			common.MimeText, w)
	}
}
