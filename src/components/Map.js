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
	padding: '10px'
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
		if (!!localStorage.getItem('user')) {
			this.props.deSelectSpot()
			this.props.removePopUp()
			this.props.renderNewMarker()
			this.props.renderSpotForm()
			this.props.addNewSpotLatLng({ lat: event.lngLat[1], lng: event.lngLat[0] })
			this.props.closeMenu()
		}
	}

	renderMarkers = () => {
		return this.props.spots.length !== 0
			? this.props.spots.map(spot => (
					<Marker key={spot._id} longitude={spot.longitude} latitude={spot.latitude}>
						<SpotMarker key={`s-m${spot._id}`} size={20} onClick={() => this.onMarkerClick(spot)} />
					</Marker>
			  ))
			: null
	}

	renderNewMarker = () => {
		const lat = this.props.selectedLat
		const lng = this.props.selectedLng
		return this.props.renderNewMarker ? (
			<Marker key="new" latitude={Number(lat)} longitude={Number(lng)}>
				<SpotMarker size={20} />
			</Marker>
		) : null
	}

	componentDidMount() {
		this.locateUser()
		this.props.getAllSpots()
	}

	// new mapbox functions

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
				{...this.state.viewport}
				width="100vw"
				height="100vh"
				onViewportChange={this.updateViewport}
				mapboxApiAccessToken={TOKEN}
				onClick={event => this.onMapClick(event)}>
				{this.renderMarkers()}
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
	selectedSpot: state.spots.selectedSpot
})

export default connect(
	mapStateToProps,
	actions
)(Map)
