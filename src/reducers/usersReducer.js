import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const INITIAL_STATE = {
	user: null
}

const usersReducer = (state = INITIAL_STATE, action) => {
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

const persistConfig = {
	key: 'users',
	storage: storage
}

export default persistReducer(persistConfig, usersReducer)
