import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import ratingsReducer from './ratingsReducer'
import spotsReducer from './spotsReducer'
import appActionsReducer from './appActionsReducer'
export default combineReducers({
	users: usersReducer,
	ratings: ratingsReducer,
	spots: spotsReducer,
	appActions: appActionsReducer
})
