export default function spotsReducer(
	state = {
		spots: []
	},
	action
) {
	switch (action.type) {
		case 'GET_ALL_SPOTS':
			return {
				spots: action.payload
			}
		case 'ADD_NEW_SPOT':
			return {
				state,
				spots: [...state.spots, action.payload]
			}
		default:
			return state
	}
}
