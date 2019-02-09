import API from '../API'
import history from '../history'

export const registerUser = user => {
	return dispatch => {
		API.registerUser(user).then(data => {
			history.push('/')
			dispatch({ type: 'REGISTER_USER', payload: data })
			dispatch({ type: 'REMOVE_OR_BUTTON' })
			dispatch({ type: 'RENDER_NAVBAR' })
		})
	}
}

export const authenticateUser = user => {
	return dispatch => {
		return API.authenticateUser(user).then(data => {
			history.push('/')
			dispatch({ type: 'AUTHENTICATE_USER', payload: data })
			dispatch({ type: 'REMOVE_OR_BUTTON' })
			dispatch({ type: 'RENDER_NAVBAR' })
		})
	}
}

export const logOutUser = () => {
	return dispatch => {
		return API.logOutUser().then(data => {
			history.push('/')
			dispatch({ type: 'LOGOUT_USER' })
			dispatch({ type: 'CLOSE_MENU' })
			dispatch({ type: 'REMOVE_SPOT_FORM' })
			dispatch({ type: 'REMOVE_NAVBAR' })
			dispatch({ type: 'REMOVE_POP_UP' })
			dispatch({ type: 'RENDER_OR_BUTTON' })
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

export const closeMenu = () => {
	return { type: 'CLOSE_MENU' }
}

export const renderSpotForm = () => {
	return { type: 'RENDER_SPOT_FORM' }
}

export const removeSpotForm = () => {
	return { type: 'REMOVE_SPOT_FORM' }
}

export const selectSpot = spot => {
	return { type: 'SELECT_SPOT', payload: spot }
}

export const deSelectSpot = () => {
	return { type: 'DESELECT_SPOT' }
}

export const renderNewMarker = () => {
	return { type: 'RENDER_NEW_MARKER' }
}

export const removeNewMarker = () => {
	return { type: 'REMOVE_NEW_MARKER' }
}

export const renderPopUp = () => {
	return { type: 'RENDER_POP_UP' }
}

export const removePopUp = () => {
	return { type: 'REMOVE_POP_UP' }
}

export const goToHome = () => {
	return dispatch => {
		history.push('/')
	}
}
export const goToLogIn = () => {
	return dispatch => {
		history.push('/login')
	}
}

export const goToSignUp = () => {
	return dispatch => {
		history.push('/register')
	}
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
