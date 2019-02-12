export default function usersReducer(
	state = {
		user: null
	},
	action
) {
	switch (action.type) {
		case 'REGISTER_USER':
			return { ...state, user: action.payload.user }
		case 'AUTHENTICATE_USER':
			return { ...state, user: action.payload.user }
		case 'LOGOUT_USER':
			return { ...state, user: null }
		case 'UPDATE_PROFILE_PHOTO':
			return { ...state, user: action.payload.data }
		default:
			return state
	}
}
