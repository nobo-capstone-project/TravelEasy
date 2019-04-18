FROM alpine
COPY ./gateway /gateway
COPY traveleasy-1554765588100-firebase-adminsdk-pxlbj-5c2e782b09.json /firebase_key.json
RUN pwd
RUN ls -alh
RUN apk add --no-cache ca-certificates
EXPOSE 8080
ENTRYPOINT [ "/gateway" ]