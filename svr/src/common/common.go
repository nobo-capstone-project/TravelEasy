package common

import (
	"net/http"
	"os"
)

const (
	HeaderContentType    = "Content-Type"
	MimeJSON             = "application/json"
	MimeText             = "text/plain"
	EnvPort              = "PORT"
	EnvSessionServerAddr = "SESSION_SERVER_ADDR"
	EnvSessionKey        = "SESSION_KEY"
	EnvFirestoreKeyPath  = "FIRESTORE_KEY_PATH"
	EnvRouteServerAddr   = "ROUTE_SERVER_ADDR"
	EnvStopServerAddr    = "STOP_SERVER_ADDR"
	EnvUserServerAddr    = "USER_SERVER_ADDR"
)

// HttpWriter takes necessary arguments to write back to client.
func HttpWriter(statusCode int, body []byte, contentType string, w http.ResponseWriter) {
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

func GetEnvPort() string {
	port := os.Getenv(EnvPort)
	if len(port) == 0 {
		return "8080"
	} else {
		return port
	}
}

func GetEnvSessionSvrAddr() string {
	sessionSvrAddr := os.Getenv(EnvSessionServerAddr)
	if len(sessionSvrAddr) == 0 {
		return "redis:6379"
	} else {
		return sessionSvrAddr
	}
}

func GetEnvSessionKey() string {
	sessionKey := os.Getenv(EnvSessionKey)
	if len(sessionKey) == 0 {
		return "default_key"
	} else {
		return sessionKey
	}
}

func GetEnvFirestoreKeyPath() string {
	firestoreKeyPath := os.Getenv(EnvFirestoreKeyPath)
	if len(firestoreKeyPath) == 0 {
		return "/firestore_key.json"
	} else {
		return firestoreKeyPath
	}
}

func GetEnvRouteSvrAddr() string {
	routeSvrAddr := os.Getenv(EnvRouteServerAddr)
	if len(routeSvrAddr) == 0 {
		return "localhost:8080"
	} else {
		return routeSvrAddr
	}
}

func GetEnvStopSvrAddr() string {
	stopSvrAddr := os.Getenv(EnvStopServerAddr)
	if len(stopSvrAddr) == 0 {
		return "localhost:8080"
	} else {
		return stopSvrAddr
	}
}

func GetEnvUserSvrAddr() string {
	userSvrAddr := os.Getenv(EnvUserServerAddr)
	if len(userSvrAddr) == 0 {
		return "localhost:8080"
	} else {
		return userSvrAddr
	}
}