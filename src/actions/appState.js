export const toggleMenu = () => {
	return { type: 'TOGGLE_MENU' }
}

export const closeMenu = () => {
	return { type: 'CLOSE_MENU' }
}

export const renderSpotForm = () => {
	return { type: 'RENDER_SPOT_FORM' }
}

export const removeSpotForm = () => {
	return { type: 'REMOVE_SPOT_FORM' }
}

export const selectSpot = spot => {
	return { type: 'SELECT_SPOT', payload: spot }
}

export const deSelectSpot = () => {
	return { type: 'DESELECT_SPOT' }
}

export const renderNewMarker = () => {
	return { type: 'RENDER_NEW_MARKER' }
}

export const removeNewMarker = () => {
	return { type: 'REMOVE_NEW_MARKER' }
}

export const renderPopUp = () => {
	return { type: 'RENDER_POP_UP' }
}

export const removePopUp = () => {
	return { type: 'REMOVE_POP_UP' }
}

export const renderRatingButtons = () => {
	return { type: 'RENDER_RATING_BUTTONS' }
}

export const removeRatingButtons = () => {
	return { type: 'REMOVE_RATING_BUTTONS' }
}

export const changeTheme = colour => {
	return { type: 'CHANGE_THEME', payload: colour }
}

export const resetTheme = () => {
	return { type: 'RESET_THEME' }
}
