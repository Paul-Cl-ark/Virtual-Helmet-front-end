import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import SpotMarker from '../components/SpotMarker'

import { Card, Icon, Image } from 'semantic-ui-react'

const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY

const navStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '10px'
}

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedSpot: null,
		renderNewMarker: false,
		viewport: {
			latitude: 51.520419,
			longitude: -0.0887159,
			zoom: 16,
			bearing: 0,
			pitch: 0
		}
	}

	onMarkerClick = spot => {
		this.setState({
			selectedSpot: spot,
			activeMarker: spot,
			showingInfoWindow: true,
			renderNewMarker: false
		})
		this.props.removeSpotForm()
	}

	onClose = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}

	onMapClick = event => {
		if (!!localStorage.getItem('user')) {
			this.setState({
				showingInfoWindow: false,
				renderNewMarker: true
			})
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
		const { selectedSpot } = this.state
		return selectedSpot ? (
			<Popup
				tipSize={5}
				anchor="top"
				longitude={selectedSpot.longitude}
				latitude={selectedSpot.latitude}
				closeOnClick={false}
				onClose={() =>
					this.setState({
						popupInfo: null
					})
				}>
				<Card>
					<Image src={this.state.selectedSpot.image} />
					<Card.Content>
						<Card.Header>{this.state.selectedSpot.description}</Card.Header>
						<Card.Meta>Date added</Card.Meta>
						<Card.Description>
							{this.state.selectedSpot.latitude} - {this.state.selectedSpot.longitude}
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="thumbs up outline" />
							{this.state.spotRating}
						</a>
					</Card.Content>
				</Card>
			</Popup>
		) : null
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
				{this.render}
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
