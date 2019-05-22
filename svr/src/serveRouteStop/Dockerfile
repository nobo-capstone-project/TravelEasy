FROM alpine
COPY ./routeStop /routeStop
COPY ./firestore_key.json /firestore_key.json
RUN pwd
RUN ls -alh
RUN apk add --no-cache ca-certificates
EXPOSE 8080
ENTRYPOINT [ "/routeStop" ]