class API {
	static init() {
		this.baseURL = 'http://localhost:3001'
		this.logInURL = this.baseURL + '/users/authenticate'
		this.registerURL = this.baseURL + '/users/register'
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
		}).then(response => response.json())
	}

	static validate() {
		return this.get('http://localhost:3001/validate')
	}

	static getInventory() {
		return this.get('http://localhost:3001/inventory')
	}

	static get(url) {
		const token = localStorage.getItem('token')
		return fetch(url, {
			headers: { Authorization: token }
		}).then(response => response.json())
	}
}

API.init()

export default API
