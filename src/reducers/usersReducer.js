export default function usersReducer(state = {}, action) {
	switch (action.type) {
		case 'REGISTER_USER':
			return action.payload
		case 'AUTHENTICATE_USER':
			return action.payload
		default:
			return state
	}
}
