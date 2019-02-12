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
		this.bicycleTheftsURL = 'https://data.police.uk/api/crimes-street/bicycle-theft?'
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

	static uploadImage(image) {
		return fetch(this.cloudinaryURL, {
			method: 'POST',
			body: image
		}).then(response => response.json())
	}

	static addNewSpot(spot) {
		const image = spot.image
		const newSpot = spot
		delete newSpot.image

		if (image) {
			return this.uploadImage(image).then(imageData => {
				return fetch(this.spotsURL, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ ...newSpot, image: imageData[0].url })
				}).then(response => response.json())
			})
		} else {
			return fetch(this.spotsURL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newSpot)
			}).then(response => response.json())
		}
	}

	static uploadProfilePhoto(image) {
		return this.uploadImage(image).then(imageData => {
			return fetch(this.usersURL, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ image: imageData[0].url })
			}).then(response => response.json())
		})
	}

	static getAllSpots() {
		return fetch(this.spotsURL).then(response => response.json())
	}

	static rateSpot(_id, rating) {
		return fetch(this.spotsURL + '/' + _id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ _id: _id, rating: rating })
		}).then(response => response.json())
	}

	static getBicycleThefts(lat, lng) {
		return fetch(this.bicycleTheftsURL + `lat=${lat}&lng=${lng}`)
			.then(response => response.json())
			.then(data => {
				return data.map(theft => {
					const { id, location } = theft
					return {
						_id: id,
						latitude: Number(location.latitude),
						longitude: Number(location.longitude),
						type: 'theft'
					}
				})
			})
	}
}

API.init()

export default API
