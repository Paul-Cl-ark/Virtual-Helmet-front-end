import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
	key: 'store',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
	let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
	let persistor = persistStore(store)
	return { store, persistor }
}
