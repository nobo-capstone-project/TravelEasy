#FROM golang:1.12 as builder
#WORKDIR /Users/ryocown/go/src/TravelEasy/svr/src/db/redis/
#COPY . .
#RUN go get github.com/bryoco/dazzling/session
#RUN go get github.com/gorilla/mux
#RUN CGO_ENABLED=0 GOOS=linux go build -v -o redisServer
#
#FROM alpine
#COPY --from=builder /Users/ryocown/go/src/TravelEasy/svr/src/db/redis/redisServer /redisServer
#CMD ["/redisServer"]

FROM alpine
COPY ./redisServer /redisServer
COPY ./traveleasy-1554765588100-firebase-adminsdk-pxlbj-5c2e782b09.json /firebase_key.json
RUN pwd
RUN ls -alh
RUN apk add --no-cache ca-certificates
EXPOSE 8080
ENTRYPOINT [ "/redisServer" ]