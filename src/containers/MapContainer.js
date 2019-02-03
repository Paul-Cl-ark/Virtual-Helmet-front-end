import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import NewSpotForm from '../components/NewSpotForm'
import * as actions from '../actions'

// const mapStyles = {
// 	width: '90%',
// 	height: '100%',
// 	margin: 'auto'
// }

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
		const newSpotForm = <NewSpotForm addNewSpot={this.addNewSpot} />
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

	addNewSpot = description => {
		this.props.addNewSpot({
			type: 'danger',
			description: description,
			latitude: this.state.selectedLat,
			longitude: this.state.selectedLng,
			user: 'paul'
		})
	}

	renderMarkers = () => {
		// console.log(this.props)
		return this.props.spotsReducer.spots.length !== 0
			? this.props.spotsReducer.spots.data.spots.map(marker => (
					<Marker
						position={{ lat: marker.latitude, lng: marker.longitude }}
						onClick={this.onMarkerClick}
					/>
			  ))
			: null
	}

	componentDidMount() {
		this.props.getAllSpots()
		console.log(this.props)
	}
	render() {
		const latLng = { lat: this.state.selectedLat, lng: this.state.selectedLng }
		if (!this.props.google) {
			return <div>Loading...</div>
		}
		return (
			<Map
				google={this.props.google}
				centerAroundCurrentLocation
				onClick={(t, map, c) => this.onMapClick(c.latLng, map)}>
				<Marker position={latLng} onClick={this.onMarkerClick} />
				{this.renderMarkers()}
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

const mapStateToProps = state => state

const WrappedMapContainer = GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)

export default connect(
	mapStateToProps,
	actions
)(WrappedMapContainer)
