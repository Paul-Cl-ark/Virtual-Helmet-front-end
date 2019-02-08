export default function spotsReducer(
	state = {
		spots: [],
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
		case 'GET_USER_SPOTS':
			return { ...state, userSpots: action.payload.data.spots }
		case 'ADD_NEW_SPOT_LAT_LNG':
			const lat = action.payload.lat
			const lng = action.payload.lng
			return { ...state, selectedLat: lat, selectedLng: lng }
		case 'ADD_NEW_SPOT':
			const newSpot = action.payload.data
			return {
				...state,
				spots: [...state.spots, newSpot]
			}
		case 'SELECT_SPOT':
			return { ...state, selectedSpot: action.payload }
		case 'DESELECT_SPOT':
			return { ...state, selectedSpot: null }
		default:
			return state
	}
}
