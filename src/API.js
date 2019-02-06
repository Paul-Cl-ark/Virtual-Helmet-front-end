class API {
	static init() {
		this.baseURL = 'http://localhost:3001'
		this.usersURL = this.baseURL + '/users'
		this.registerURL = this.usersURL + '/register'
		this.logInURL = this.usersURL + '/authenticate'
		this.logOutURL = this.usersURL + '/logout'
		this.spotsURL = this.baseURL + '/spots'
		this.userSpotsURL = this.spotsURL + '/user-spots'
	}

	static registerUser(user) {
		return fetch(this.registerURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		}).then(response => response.json())
	}

	static authenticateUser(user) {
		return fetch(this.logInURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		}).then(response => (response.status !== 500 ? response.json() : { message: 'Unauthorised' }))
	}

	static logOutUser() {
		return fetch(this.logOutURL).then(response => response.json())
	}

	static addNewSpot(spot) {
		return fetch(this.spotsURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(spot)
		}).then(response => response.json())
	}

	static getAllSpots() {
		return fetch(this.spotsURL).then(response => response.json())
	}

	static getUserSpots() {
		return fetch(this.userSpotsURL).then(response => console.log(response.json()))
	}
}

API.init()

export default API
