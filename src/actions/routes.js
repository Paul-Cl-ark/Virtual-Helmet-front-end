import history from '../history'

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

export const goToSpots = () => {
	return dispatch => {
		history.push('/spots')
	}
}

export const goToSpotPage = _id => {
	return dispatch => {
		history.push(`/viewspot/${_id}`)
	}
}
