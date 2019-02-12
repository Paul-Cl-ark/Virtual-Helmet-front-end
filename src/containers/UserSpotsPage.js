import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TextLogo from '../components/TextLogo'
import { Card, Container } from 'semantic-ui-react'

const containerStyle = {
	display: 'flex',
	justifyContent: 'center',
	margin: '25px',
	height: '90%',
	width: '90%'
}

class UserSpotsPage extends Component {
	spots = () => {
		let spotList = []
		this.props.spots.map(spot => {
			spotList.push({
				header: `Date added: ${spot.date}`,
				description: `Description: ${spot.description}`,
				meta: `Rating: ${spot.rating}`
			})
		})
		return spotList
	}

	render() {
		return (
			<Fragment>
				<TextLogo />
				<Container style={containerStyle}>
					<Card.Group items={this.spots()} />
				</Container>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	spots: state.spots.userSpots
})

export default connect(mapStateToProps)(UserSpotsPage)
