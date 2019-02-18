import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import TextLogo from '../components/TextLogo'
import { Card, Container, Header } from 'semantic-ui-react'

const containerStyle = {
	display: 'flex',
	justifyContent: 'center',
	margin: '25px',
	height: '90%',
	width: '90%'
}

class UserSpotsPage extends Component {
	spots = () => {
		return this.props.spots.map(spot => {
			return (
				<Card
					key={spot._id}
					style={{ boxShadow: `1px 1px 1px 1px ${this.props.colour}` }}
					header={`Date added: ${moment(spot.header).format('LL')}`}
					description={`Description: ${spot.description}`}
					meta={`Rating: ${spot.rating}`}
				/>
			)
		})
	}

	showMarker = () => {
		if (this.props.spots.length === 0) {
			return (
				<div>
					<p>
						<img src={'/images/map-marker.png'} alt="A marker pin" />
					</p>
					<Header as="h2">Try adding some spots first!</Header>
				</div>
			)
		}
	}

	render() {
		return (
			<Fragment>
				<TextLogo />
				<Container style={containerStyle}>
					<Card.Group centered>
						{this.spots()}
						{this.showMarker()}
					</Card.Group>
				</Container>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	spots: state.spots.userSpots,
	colour: state.app.theme
})

export default connect(mapStateToProps)(UserSpotsPage)
