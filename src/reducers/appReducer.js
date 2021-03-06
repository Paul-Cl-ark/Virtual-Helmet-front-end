import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const INITIAL_STATE = {
	renderMenu: false,
	renderSpotForm: false,
	renderPopUp: false,
	renderNewMarker: false,
	renderOrButton: true,
	renderRatingButtons: false,
	theme: 'green'
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return { ...state, renderMenu: !state.renderMenu }
		case 'CLOSE_MENU':
			return { ...state, renderMenu: false }
		case 'RENDER_SPOT_FORM':
			return { ...state, renderSpotForm: true }
		case 'REMOVE_SPOT_FORM':
			return { ...state, renderSpotForm: false }
		case 'RENDER_NEW_MARKER':
			return { ...state, renderNewMarker: true }
		case 'REMOVE_NEW_MARKER':
			return { ...state, renderNewMarker: false }
		case 'RENDER_POP_UP':
			return { ...state, renderPopUp: true }
		case 'REMOVE_POP_UP':
			return { ...state, renderPopUp: false }
		case 'REMOVE_OR_BUTTON':
			return { ...state, renderOrButton: false }
		case 'RENDER_OR_BUTTON':
			return { ...state, renderOrButton: true }
		case 'REMOVE_RATING_BUTTONS':
			return { ...state, renderRatingButtons: false }
		case 'RENDER_RATING_BUTTONS':
			return { ...state, renderRatingButtons: true }
		case 'CHANGE_THEME':
			return { ...state, theme: action.payload }
		case 'RESET_THEME':
			return { ...state, theme: 'green' }
		default:
			return state
	}
}

const persistConfig = {
	key: 'app',
	storage: storage,
	blacklist: ['renderSpotForm', 'renderMenu', 'renderPopUp', 'renderNewMarker']
}

export default persistReducer(persistConfig, appReducer)
