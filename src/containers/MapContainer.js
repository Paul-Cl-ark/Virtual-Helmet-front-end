import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import NewSpotForm from '../components/NewSpotForm'

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

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})
	}

	onOpen(props, event) {
		const newSpotForm = <NewSpotForm />
		ReactDOM.render(React.Children.only(newSpotForm), document.getElementById('infoWindowForm'))
	}

	onClose = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}

	onMapClick = (location, map) => {
		this.setState({
			selectedLat: location.lat(),
			selectedLng: location.lng(),
			showingInfoWindow: false
		})
	}

	render() {
		const latlong = { lat: this.state.selectedLat, lng: this.state.selectedLng }
		if (!this.props.google) {
			return <div>Loading...</div>
		}
		return (
			<Map
				google={this.props.google}
				centerAroundCurrentLocation
				style={mapStyles}
				onClick={(t, map, c) => this.onMapClick(c.latLng, map)}>
				<Marker position={latlong} onClick={this.onMarkerClick} />

				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onOpen={event => {
						this.onOpen(this.props, event)
					}}
					onClose={this.onClose}>
					<div id="infoWindowForm" />
				</InfoWindow>
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)
