FROM golang:1.12 as builder
WORKDIR /Users/ryocown/go/src/TravelEasy/svr/src/db/redis/
COPY . .
RUN go get github.com/bryoco/dazzling/session
RUN go get github.com/gorilla/mux
RUN CGO_ENABLED=0 GOOS=linux go build -v -o redisServer

FROM alpine
COPY --from=builder /Users/ryocown/go/src/TravelEasy/svr/src/db/redis/redisServer /redisServer
CMD ["/redisServer"]