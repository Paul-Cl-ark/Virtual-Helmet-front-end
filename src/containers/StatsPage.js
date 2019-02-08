import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getUserSpots } from '../actions'

class StatsPage extends Component {
	state = {}

	componentDidMount() {
		this.props.getUserSpots()
	}

	displayUserSpots = () => {
		return (
			<ul>
				{this.props.userSpots.length !== 0
					? this.props.userSpots.map(spot => <li>{spot.description}</li>)
					: null}
			</ul>
		)
	}

	render() {
		return (
			<Fragment>
				Stats page - Current user's spots will show here, along with some stats eg. number of spots
				added, how many upvotes/downvotes etc
				{this.displayUserSpots()}
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
