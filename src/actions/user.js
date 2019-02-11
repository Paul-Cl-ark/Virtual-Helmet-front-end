import API from '../API'
import history from '../history'

export const registerUser = user => {
	return dispatch => {
		API.registerUser(user).then(data => {
			history.push('/')
			dispatch({ type: 'REGISTER_USER', payload: data })
			dispatch({ type: 'REMOVE_OR_BUTTON' })
			dispatch({ type: 'RENDER_NAVBAR' })
			dispatch({ type: 'RENDER_RATING_BUTTONS' })
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
			dispatch({ type: 'RENDER_RATING_BUTTONS' })
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
			dispatch({ type: 'REMOVE_RATING_BUTTONS' })
		})
	}
}
