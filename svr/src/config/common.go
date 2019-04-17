package config

import "net/http"

const (
	MimeJSON = "application/json"
	MimeText = "text/plain"
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