class API {
	static init() {
		this.baseURL = '/API'
		this.usersURL = this.baseURL + '/users'
		this.registerURL = this.usersURL + '/register'
		this.logInURL = this.usersURL + '/authenticate'
		this.logOutURL = this.usersURL + '/logout'
		this.spotsURL = this.baseURL + '/spots'
		this.userSpotsURL = this.spotsURL + '/user-spots'
		this.cloudinaryURL = this.baseURL + '/image-upload'
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
		const image = spot.image
		const newSpot = spot
		delete newSpot.image

		return fetch(this.cloudinaryURL, {
			method: 'POST',
			body: image
		})
			.then(response => response.json())
			.then(imageData => {
				return fetch(this.spotsURL, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ ...newSpot, image: imageData[0].url })
				}).then(response => response.json())
			})
	}

	static getAllSpots() {
		return fetch(this.spotsURL).then(response => response.json())
	}

	static getUserSpots() {
		return fetch(this.userSpotsURL).then(response => response.json())
	}
}

API.init()

export default API
