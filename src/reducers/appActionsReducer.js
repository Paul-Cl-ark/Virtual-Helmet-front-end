export default function appActionsReducer(
	state = {
		menuIsOpen: false
	},
	action
) {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return { ...state, menuIsOpen: !state.menuIsOpen }
		default:
			return state
	}
}
