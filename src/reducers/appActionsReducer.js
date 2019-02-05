export default function appActionsReducer(
	state = {
		renderMenu: false,
		renderSpotForm: false
	},
	action
) {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return { ...state, renderMenu: !state.renderMenu }
		case 'RENDER_SPOT_FORM':
			return { ...state, renderSpotForm: true }
		case 'REMOVE_SPOT_FORM':
			return { ...state, renderSpotForm: false }
		default:
			return state
	}
}
