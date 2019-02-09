export default function appActionsReducer(
	state = {
		renderMenu: false,
		renderSpotForm: false,
		renderPopUp: false,
		renderNewMarker: false,
		renderOrButton: true,
		renderNavBar: false,
		renderRatingButtons: false
	},
	action
) {
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
		case 'RENDER_NAVBAR':
			return { ...state, renderNavBar: true }
		case 'REMOVE_NAVBAR':
			return { ...state, renderNavBar: false }
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
		default:
			return state
	}
}
