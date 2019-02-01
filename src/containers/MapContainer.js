import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

import CurrentLocation from '../components/CurrentLocation'

const mapStyles = {
	width: '90%',
	height: '85%',
	margin: 'auto'
}

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		selectedLat: '',
		selectedLng: ''
	}

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})

	onClose = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}

	onMapClick = (location, map) => {
		this.setState({ selectedLat: location.lat(), selectedLng: location.lng() })
	}

	render() {
		const latlong = {lat: this.state.selectedLat, lng: this.state.selectedLng}
		return (
			<Map
				google={this.props.google}
				centerAroundCurrentLocation
				style={mapStyles}
				onClick={(t, map, c) => this.onMapClick(c.latLng, map)} >
				<Marker position={latlong} />
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}>
					<div>
						<h4>{this.state.selectedPlace.name}</h4>
					</div>
				</InfoWindow>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
