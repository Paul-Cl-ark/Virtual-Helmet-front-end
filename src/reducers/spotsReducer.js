import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const INITIAL_STATE = {
	spots: [],
	theftSpots: [],
	userSpots: [],
	selectedLat: '',
	selectedLng: '',
	selectedSpot: null
}

const spotsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_ALL_SPOTS':
			return { ...state, spots: action.payload.data.spots }
		case 'GET_BICYCLE_THEFTS':
			return { ...state, theftSpots: action.payload }
		case 'GET_USER_SPOTS':
			const userSpots = [...state.spots.filter(spot => spot.user === action.payload)]
			return { ...state, userSpots: userSpots }
		case 'ClEAR_USER_SPOTS':
			return { ...state, userSpots: [] }
		case 'ADD_NEW_SPOT_LAT_LNG':
			const lat = action.payload.lat
			const lng = action.payload.lng
			return { ...state, selectedLat: lat, selectedLng: lng }
		case 'ADD_NEW_SPOT':
			if (action.payload.data) {
				const newSpot = action.payload.data
				return {
					...state,
					spots: [...state.spots, newSpot],
					userSpots: [...state.userSpots, newSpot]
				}
			}
			break
		case 'SELECT_SPOT':
			return { ...state, selectedSpot: action.payload }
		case 'DESELECT_SPOT':
			return { ...state, selectedSpot: null }
		case 'RATE_SPOT':
			const ratedSpot = action.payload.data
			const newSpots = state.spots.filter(spot => spot._id !== ratedSpot._id)
			newSpots.push(ratedSpot)
			return {
				...state,
				spots: newSpots,
				selectedSpot: ratedSpot
			}
		default:
			return state
	}
}

const persistConfig = {
	key: 'spots',
	storage: storage,
	blacklist: ['selectedLat', 'selectedLng', 'selectedSpot']
}

export default persistReducer(persistConfig, spotsReducer)
