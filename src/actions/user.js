import API from '../API'
import history from '../history'
import { toast } from 'react-toastify'

export const registerUser = user => {
	return dispatch => {
		API.registerUser(user).then(data => {
			if (data.user) {
				history.push('/')
				dispatch({ type: 'REGISTER_USER', payload: data })
				dispatch({ type: 'REMOVE_OR_BUTTON' })
				dispatch({ type: 'RENDER_RATING_BUTTONS' })
			} else {
				toast.info(data.message)
			}
		})
	}
}

export const authenticateUser = user => {
	return dispatch => {
		return API.authenticateUser(user).then(data => {
			if (data.user) {
				history.push('/')
				dispatch({ type: 'AUTHENTICATE_USER', payload: data })
				dispatch({ type: 'REMOVE_OR_BUTTON' })
				dispatch({ type: 'RENDER_RATING_BUTTONS' })
				dispatch({ type: 'GET_USER_SPOTS', payload: data.user._id })
			} else {
				toast.error(data.message)
			}
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
			dispatch({ type: 'REMOVE_POP_UP' })
			dispatch({ type: 'RENDER_OR_BUTTON' })
			dispatch({ type: 'REMOVE_RATING_BUTTONS' })
			dispatch({ type: 'ClEAR_USER_SPOTS' })
			dispatch({ type: 'RESET_THEME' })
		})
	}
}

export const uploadProfilePhoto = formData => {
	return dispatch => {
		return API.uploadProfilePhoto(formData).then(data => {
			dispatch({ type: 'UPDATE_PROFILE_PHOTO', payload: data })
		})
	}
}
