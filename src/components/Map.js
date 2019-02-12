import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MapGL, { Marker, NavigationControl } from 'react-map-gl'
import SpotMarker from './SpotMarker'
import TheftMarker from './TheftMarker'
import SpotPopUp from './SpotPopUp'

const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY

const navStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	margin: '10px'
}

export class Map extends Component {
	state = {
		viewport: {
			latitude: 51.520419,
			longitude: -0.0887159,
			zoom: 16,
			bearing: 0,
			pitch: 0
		}
	}

	onMarkerClick = spot => {
		this.props.selectSpot(spot)
		this.props.removeNewMarker()
		this.props.renderPopUp()
		this.props.removeSpotForm()
		this.props.closeMenu()
	}

	onClose = () => {
		this.props.removePopUp()
		this.props.deselectSpot()
	}

	onMapClick = event => {
		return this.props.user
			? (this.props.deSelectSpot(),
			  this.props.removePopUp(),
			  this.props.renderNewMarker(),
			  this.props.renderSpotForm(),
			  this.props.addNewSpotLatLng({ lat: event.lngLat[1], lng: event.lngLat[0] }),
			  this.props.closeMenu())
			: null
	}

	renderMarker = spot => {
		const { _id, latitude, longitude, type } = spot
		// let marker = null
		// switch (type) {
		// 	case 'danger':
		// 		marker = <SpotMarker key={`s-m${_id}`} onClick={() => this.onMarkerClick(spot)} />
		// 		break
		// 	case 'theft':
		// 		marker = <TheftMarker key={`s-m${_id}`} onClick={() => this.onMarkerClick(spot)} />
		// 		break
		// 	default:
		// 		marker = <SpotMarker key={`s-m${_id}`} onClick={() => this.onMarkerClick(spot)} />
		// 		break
		// }
		return (
			<Marker key={_id} id={_id} longitude={longitude} latitude={latitude} type={type}>
				<SpotMarker key={`s-m${_id}`} onClick={() => this.onMarkerClick(spot)} />
			</Marker>
		)
	}

	renderTheftMarker = theft => {
		const { id, latitude, longitude, type } = theft
		return (
			<Marker key={id} id={id} longitude={longitude} latitude={latitude} type={type}>
				<TheftMarker key={`s-m${id}`} onClick={() => this.onMarkerClick(theft)} />
			</Marker>
		)
	}

	renderNewMarker = () => {
		const lat = this.props.selectedLat
		const lng = this.props.selectedLng
		const render = this.props.renderNewSpotMarker
		const onDragEnd = event => {
			this.props.addNewSpotLatLng({ lat: event.lngLat[1], lng: event.lngLat[0] })
		}
		let marker = (
			<Marker
				draggable={true}
				onDragEnd={onDragEnd}
				key="new-marker"
				latitude={Number(lat)}
				longitude={Number(lng)}>
				<SpotMarker size={20} />
			</Marker>
		)
		return render ? marker : null
	}

	componentDidMount() {
		this.locateUser()
		this.props.getAllSpots()
		this.props.getUserSpots()
	}

	handleViewportChange = viewport => {
		this.setState({ viewport })
		this.props.getBicycleThefts(viewport.latitude, viewport.longitude)
	}

	locateUser() {
		navigator.geolocation.getCurrentPosition(position => {
			this.handleViewportChange({
				longitude: position.coords.longitude,
				latitude: position.coords.latitude,
				zoom: 16
			})
		})
	}

	renderPopup() {
		const selectedSpot = this.props.selectedSpot
		return selectedSpot ? <SpotPopUp /> : null
	}

	render() {
		return (
			<MapGL
				mapStyle="mapbox://styles/paul-clark/cjrzh8sqd0r0w1fn6it3ir903"
				{...this.state.viewport}
				width="100vw"
				height="100vh"
				onViewportChange={this.handleViewportChange}
				mapboxApiAccessToken={TOKEN}
				onClick={event => this.onMapClick(event)}>
				{this.props.spots.map(this.renderMarker)}
				{this.props.theftSpots.map(this.renderTheftMarker)}
				{this.renderNewMarker()}
				{this.renderPopup()}
				<div className="nav" style={navStyle}>
					<NavigationControl onViewportChange={this.handleViewportChange} />
				</div>
			</MapGL>
		)
	}
}

const mapStateToProps = state => ({
	spots: state.spots.spots,
	theftSpots: state.spots.theftSpots,
	selectedLat: state.spots.selectedLat,
	selectedLng: state.spots.selectedLng,
	selectedSpot: state.spots.selectedSpot,
	renderNewSpotMarker: state.appActions.renderNewMarker,
	user: state.users.user
})

export default connect(
	mapStateToProps,
	actions
)(Map)
