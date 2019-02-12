export default function spotsReducer(
	state = {
		spots: [],
		theftSpots: [],
		userSpots: [],
		selectedLat: '',
		selectedLng: '',
		selectedSpot: null
	},
	action
) {
	switch (action.type) {
		case 'GET_ALL_SPOTS':
			return { ...state, spots: action.payload.data.spots }
		case 'GET_BICYCLE_THEFTS':
			return { ...state, theftSpots: action.payload }
		case 'GET_USER_SPOTS':
			const userSpots = [...state.spots.filter(spot => spot.user === action.payload)]
			return { ...state, userSpots: userSpots }
		case 'ADD_NEW_SPOT_LAT_LNG':
			const lat = action.payload.lat
			const lng = action.payload.lng
			return { ...state, selectedLat: lat, selectedLng: lng }
		case 'ADD_NEW_SPOT':
			if (action.payload.data) {
				const newSpot = action.payload.data
				return {
					...state,
					spots: [...state.spots, newSpot]
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
