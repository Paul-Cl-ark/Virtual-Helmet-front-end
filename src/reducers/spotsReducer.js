export default function spotsReducer(
	state = {
		spots: [],
		selectedLat: '',
		selectedLng: ''
	},
	action
) {
	switch (action.type) {
		case 'GET_ALL_SPOTS':
			return {
				spots: action.payload.data.spots
			}
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
		default:
			return state
	}
}
