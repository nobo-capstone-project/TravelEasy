FROM golang:1.12 as builder
WORKDIR /go/src/TravelEasy/svr/src
#COPY . /svr
ADD . /go/src/TravelEasy/svr/src
RUN go get github.com/bryoco/dazzling/session
RUN go get github.com/gorilla/mux
RUN go get cloud.google.com/go/firestore
RUN go get firebase.google.com/go
RUN go get golang.org/x/crypto/bcrypt
RUN go get golang.org/x/net/context
RUN go get google.golang.org/api/option
RUN CGO_ENABLED=0 GOOS=linux go build -v -o gateway

FROM alpine
COPY --from=builder /go/src/TravelEasy/svr/src/gateway /gateway
COPY --from=builder /go/src/TravelEasy/svr/src/firestore_key.json /firestore_key.json
RUN pwd
RUN ls -alh
CMD ["/gateway"]

#FROM alpine
#COPY ./gateway /gateway
#COPY traveleasy-1554765588100-firebase-adminsdk-pxlbj-5c2e782b09.json /firebase_key.json
#RUN pwd
#RUN ls -alh
#RUN apk add --no-cache ca-certificates
#EXPOSE 8080
#ENTRYPOINT [ "/gateway" ]