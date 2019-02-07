import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import * as actions from '../actions'
import { Card, Icon, Image } from 'semantic-ui-react'

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		renderNewMarker: false
	}

	onMarkerClick = (props, marker, event) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true,
			renderNewMarker: false,
			spotDescription: props.spotDescription,
			image: props.image
		})
		console.log(props)
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

	onMapClick = (location, map) => {
		if (!!localStorage.getItem('user')) {
			this.setState({
				showingInfoWindow: false,
				renderNewMarker: true
			})
			this.props.renderSpotForm()
			this.props.addNewSpotLatLng({ lat: location.lat(), lng: location.lng() })
		}
	}

	renderMarkers = () => {
		return this.props.spotsReducer.spots.length !== 0
			? this.props.spotsReducer.spots.map(spot => (
					<Marker
						spotDescription={spot.description}
						position={{ lat: spot.latitude, lng: spot.longitude }}
						onClick={this.onMarkerClick}
						image={spot.image}
						key={spot.id}
						id={spot.id}
					/>
			  ))
			: null
	}

	renderNewMarker = () => {
		const lat = this.props.spotsReducer.selectedLat
		const lng = this.props.spotsReducer.selectedLng
		return this.state.renderNewMarker ? <Marker position={{ lat: lat, lng: lng }} /> : null
	}

	componentDidMount() {
		this.props.getAllSpots()
	}

	render() {
		if (!this.props.google) {
			return <div>Loading...</div>
		}

		return (
			<Map
				google={this.props.google}
				centerAroundCurrentLocation
				zoom={16}
				onClick={(t, map, c) => this.onMapClick(c.latLng, map)}>
				{this.renderMarkers()}
				{this.renderNewMarker()}
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
					onClose={this.onClose}>
					<Card>
						<Image
							src={
								this.state.image ||
								'https://www.wibc.com/sites/g/files/exi441/f/styles/large_730/public/article-images-featured/554676-391326.jpg?itok=VPAnqxDA'
							}
						/>
						<Card.Content>
							<Card.Header>{this.state.spotDescription}</Card.Header>
							<Card.Meta>Date added</Card.Meta>
							<Card.Description>Lat long</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<a>
								<Icon name="thumbs up outline" />
								10 Likes
							</a>
						</Card.Content>
					</Card>
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
