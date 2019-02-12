import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/'
import { persistStore } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
	let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
	let persistor = persistStore(store)
	return { store, persistor }
}
