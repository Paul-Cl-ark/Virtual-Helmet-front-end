import API from '../API'

export const registerUser = user => {
	return dispatch => {
		API.registerUser(user).then(data => {
			dispatch({ type: 'REGISTER_USER', payload: data })
		})
	}
}

export const authenticateUser = user => {
	return dispatch => {
		API.authenticateUser(user).then(data => {
			dispatch({ type: 'AUTHENTICATE_USER', payload: data })
		})
	}
}
