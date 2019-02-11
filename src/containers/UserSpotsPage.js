import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TextLogo from '../components/TextLogo'
import { getUserSpots } from '../actions'
import { Card, Container } from 'semantic-ui-react'

const containerStyle = {
	display: 'flex',
	justifyContent: 'center',
	margin: '25px',
	height: '90%',
	width: '90%'
}

class StatsPage extends Component {
	componentDidMount() {
		this.props.getUserSpots()
	}

	spots = () => {
		let spotList = []
		this.props.userSpots.map(spot => {
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
	userSpots: state.spots.userSpots
})

export default connect(
	mapStateToProps,
	{ getUserSpots }
)(StatsPage)
