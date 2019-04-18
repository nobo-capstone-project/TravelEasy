package common

import (
	"net/http"
	"os"
)

const (
	HeaderContentType = "Content-Type"
	MimeJSON = "application/json"
	MimeText = "text/plain"
	EnvPort = "PORT"
	EnvSessionServer = "SESSION_SERVER_ADDR"
	EnvSessionKey = "SESSION_KEY"
	EnvFirestoreKeyPath = "FIRESTORE_KEY_PATH"
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

func GetEnvRedisAddr() string {
	redisAddr := os.Getenv(EnvSessionServer)
	if len(redisAddr) == 0 {
		return "redis:6379"
	} else {
		return redisAddr
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
		return "/firebase_key.json"
	} else {
		return firestoreKeyPath
	}
}