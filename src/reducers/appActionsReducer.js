export default function appActionsReducer(
	state = {
		menuIsOpen: false
	},
	action
) {
	switch (action.type) {
		case 'OPEN_MENU':
			console.log('menu is open: ', !state.menuIsOpen)
			return { ...state, menuIsOpen: !state.menuIsOpen }
		default:
			return state
	}
}
