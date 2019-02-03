class API {
	static init() {
		this.baseURL = 'http://localhost:3001'
		this.logInURL = this.baseURL + '/users/authenticate'
		this.registerURL = this.baseURL + '/users/register'
		this.spotsURL = this.baseURL + '/spots'
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

	static addNewSpot(spot) {
		console.log(spot)
		return fetch(this.spotsURL, {
			method: 'POST',
			header: { 'Content-Type': 'application/json' },
			body: JSON.stringify(spot)
		})
			.then(response => response.json())
			.then(data => console.log(data))
	}

	static getAllSpots() {
		return fetch(this.spotsURL).then(response => response.json())
	}
}

API.init()

export default API
