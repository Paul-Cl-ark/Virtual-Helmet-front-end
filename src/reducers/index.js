import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import ratingsReducer from './ratingsReducer'
import spotsReducer from './spotsReducer'
export default combineReducers({
	usersReducer,
	ratingsReducer,
	spotsReducer
})
