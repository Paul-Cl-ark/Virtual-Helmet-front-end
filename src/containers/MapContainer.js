import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MapGL, { Marker, NavigationControl } from 'react-map-gl'
import SpotMarker from '../components/SpotMarker'
import SpotPopUp from '../components/SpotPopUp'

const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY

const navStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '10px'
}

export class MapContainer extends Component {
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
		this.props.renderNewMarker()
		this.props.renderPopUp()
		this.props.removeSpotForm()
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
		}
	}

	renderMarkers = () => {
		return this.props.spotsReducer.spots.length !== 0
			? this.props.spotsReducer.spots.map(spot => (
					<Marker longitude={spot.longitude} latitude={spot.latitude} key={spot.id}>
						<SpotMarker size={20} onClick={() => this.onMarkerClick(spot)} />
					</Marker>
			  ))
			: null
	}

	renderNewMarker = () => {
		const lat = this.props.spotsReducer.selectedLat
		const lng = this.props.spotsReducer.selectedLng
		return this.state.renderNewMarker ? (
			<Marker key="new" latitude={lat} longitude={lng}>
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
		const selectedSpot = this.props.spotsReducer.selectedSpot
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

const mapStateToProps = state => state

export default connect(
	mapStateToProps,
	actions
)(MapContainer)
