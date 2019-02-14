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
					<Card.Group centered items={this.spots()}>
						{this.spots().map(spot => (
							<Card style={{boxShadow: `1px 1px 1px 1px ${this.props.colour}`}} header={spot.header} description={spot.description} meta={spot.meta} />
						))}
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
