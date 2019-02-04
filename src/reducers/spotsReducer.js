export default function spotsReducer(
	state = {
		spots: []
	},
	action
) {
	switch (action.type) {
		case 'GET_ALL_SPOTS':
			return {
				spots: action.payload.data.spots
			}
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
