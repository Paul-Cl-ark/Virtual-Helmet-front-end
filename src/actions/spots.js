import API from '../API'
import { toast } from 'react-toastify'

export const addNewSpotLatLng = latLng => {
	return { type: 'ADD_NEW_SPOT_LAT_LNG', payload: latLng }
}

export const addNewSpot = spot => {
	return dispatch => {
		API.addNewSpot(spot).then(data => {
			dispatch({ type: 'ADD_NEW_SPOT', payload: data })
			dispatch({ type: 'REMOVE_SPOT_FORM' })
			dispatch({ type: 'REMOVE_NEW_MARKER' })
			toast.success('Spot added, thanks for your contribution!')
		})
	}
}

export const getAllSpots = () => {
	return dispatch => {
		API.getAllSpots().then(data => {
			dispatch({ type: 'GET_ALL_SPOTS', payload: data })
		})
	}
}

export const rateSpot = (_id, rating) => {
	return dispatch => {
		API.rateSpot(_id, rating).then(data => {
			dispatch({ type: 'RATE_SPOT', payload: data })
		})
	}
}

export const getUserSpots = () => {
	return dispatch => {
		dispatch({ type: 'GET_USER_SPOTS' })
	}
}

export const getBicycleThefts = (lat, lng) => {
	return dispatch => {
		API.getBicycleThefts(lat, lng).then(data => {
			dispatch({ type: 'GET_BICYCLE_THEFTS', payload: data })
		})
	}
}
