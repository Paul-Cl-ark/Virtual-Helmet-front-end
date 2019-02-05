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
			dispatch({ type: 'AUTHENTICATE_USER', payload: data })
			history.push('/')
			localStorage.setItem('user', data.user.firstName)
		})
	}
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

export const openMenu = () => {
	return { type: 'OPEN_MENU' }
}

export const goToLogin = () => {
	history.push('/login')
}

export const goToRegister = () => {
	history.push('/register')
}
