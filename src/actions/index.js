import API from '../API'
import history from '../history'

export const registerUser = user => {
	return dispatch => {
		API.registerUser(user).then(data => {
			dispatch({ type: 'REGISTER_USER', payload: data })
			history.push('/')
			localStorage.setItem('user', data.user.firstName)
		})
	}
}

export const authenticateUser = user => {
	return dispatch => {
		return API.authenticateUser(user).then(data => {
			console.log(data)
			history.push('/')
			localStorage.setItem('user', data.user.firstName)
			dispatch({ type: 'AUTHENTICATE_USER', payload: data })
		})
	}
}

export const logOutUser = () => {
	return dispatch => {
		return API.logOutUser().then(data => {
			console.log('in the actions index: ', data)
			history.push('/')
			localStorage.removeItem('user')
			dispatch({ type: 'TOGGLE_MENU' })
			dispatch({ type: 'LOGOUT_USER' })
		})
	}
}

export const addNewSpotLatLng = latLng => {
	return { type: 'ADD_NEW_SPOT_LAT_LNG', payload: latLng }
}

export const addNewSpot = spot => {
	return dispatch => {
		API.addNewSpot(spot).then(data => {
			dispatch({ type: 'ADD_NEW_SPOT', payload: data })
		})
	}
}

export const getAllSpots = () => {
	return dispatch => {
		API.getAllSpots().then(data => {
			dispatch({ type: 'GET_ALL_SPOTS', payload: data })
		})
	}
}

export const getUserSpots = () => {
	return dispatch => {
		API.getUserSpots().then(data => {
			console.log('user spot data: ', data)
			dispatch({ type: 'GET_USER_SPOTS', payload: data })
		})
	}
}

export const toggleMenu = () => {
	return { type: 'TOGGLE_MENU' }
}

export const renderSpotForm = () => {
	return { type: 'RENDER_SPOT_FORM' }
}

export const removeSpotForm = () => {
	return { type: 'REMOVE_SPOT_FORM' }
}

export const goToLogin = () => {
	history.push('/login')
}

export const goToRegister = () => {
	history.push('/register')
}
export const goToProfile = () => {
	return dispatch => {
		history.push('/profile')
	}
}

export const goToSettings = () => {
	return dispatch => {
		history.push('/settings')
	}
}

export const goToStats = () => {
	return dispatch => {
		history.push('/stats')
	}
}
