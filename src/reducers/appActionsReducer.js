export default function appActionsReducer(
	state = {
		renderMenu: false,
		renderSpotForm: false,
		renderPopUp: false,
		renderNewMarker: false
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
		case 'RENDER_NEW_MARKER':
			return { ...state, renderNewMarker: true }
		case 'REMOVE_NEW_MARKER':
			return { ...state, renderNewMarker: false }
		case 'RENDER_POP_UP':
			return { ...state, renderPopUp: true }
		case 'REMOVE_POP_UP':
			return { ...state, renderPopUp: false }
		default:
			return state
	}
}
