import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUserSpots } from '../actions'
import { Card } from 'semantic-ui-react'

class StatsPage extends Component {
	state = {}

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
				<Card.Group items={this.spots()} />
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
