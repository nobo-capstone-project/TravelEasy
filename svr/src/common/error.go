package common

import "github.com/pkg/errors"

var (
	ErrUnsupportedMediaType = errors.New("unsupported media type")
	ErrInvalidCredentials   = errors.New("invalid credentials")
	ErrMethodNotAllowed     = errors.New("method not allowed")
	ErrNotYetImplemented	= errors.New("method not yet implemented")
)

