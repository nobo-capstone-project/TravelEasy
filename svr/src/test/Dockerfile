# CGO_ENABLED=0 GOOS=linux go build -v -o testServer
# docker build -t gcr.io/traveleasy-1554765588100/test:latest .
# docker push gcr.io/traveleasy-1554765588100/test:latest
FROM golang:latest as builder
RUN mkdir -p $GOPATH/src/build
ADD . $GOPATH/src/build
WORKDIR $GOPATH/src/build
RUN go get ./...
RUN go build -o main .

FROM alpine
COPY --from=builder /go/src/build/main /app/
WORKDIR /app
CMD ["/main"]