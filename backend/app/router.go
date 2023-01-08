package app

import "github.com/marceloungaretti/go-react-auth-demo/controller/users"

func mapUrls() {
	router.POST("/api/register", users.Register)
	router.POST("/api/login", users.Login)
	// router.GET("/api/user", users.Get)
	// router.GET("/api/logout", users.Logout)
}
