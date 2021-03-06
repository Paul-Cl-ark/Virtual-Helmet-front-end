import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import ratingsReducer from './ratingsReducer'
import spotsReducer from './spotsReducer'
import appReducer from './appReducer'
export default combineReducers({
	users: usersReducer,
	ratings: ratingsReducer,
	spots: spotsReducer,
	app: appReducer
})
