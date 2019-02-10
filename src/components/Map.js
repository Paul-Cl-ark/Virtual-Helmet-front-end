import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MapGL, { Marker, NavigationControl } from 'react-map-gl'
import SpotMarker from './SpotMarker'
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
		return (
			<Marker key={spot._id} id={spot._id} longitude={spot.longitude} latitude={spot.latitude}>
				<SpotMarker key={`s-m${spot._id}`} size={20} onClick={() => this.onMarkerClick(spot)} />
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
	}

	updateViewport = viewport => {
		this.setState({ viewport })
	}

	locateUser() {
		navigator.geolocation.getCurrentPosition(position => {
			this.updateViewport({
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
				onViewportChange={this.updateViewport}
				mapboxApiAccessToken={TOKEN}
				onClick={event => this.onMapClick(event)}>
				{this.props.spots.map(this.renderMarker)}
				{this.renderNewMarker()}
				{this.renderPopup()}
				<div className="nav" style={navStyle}>
					<NavigationControl onViewportChange={this.updateViewport} />
				</div>
			</MapGL>
		)
	}
}

const mapStateToProps = state => ({
	spots: state.spots.spots,
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
