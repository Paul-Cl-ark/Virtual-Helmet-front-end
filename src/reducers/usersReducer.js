export default function usersReducer(
	state = {
		user: ''
	},
	action
) {
	switch (action.type) {
		case 'REGISTER_USER':
			return { ...state, user: action.payload }
		case 'AUTHENTICATE_USER':
			return { ...state, user: action.payload.user }
		case 'LOGOUT_USER':
			return { ...state, user: '' }
		default:
			return state
	}
}
