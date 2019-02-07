import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class StatsPage extends Component {
	state = {}

	componentDidMount() {
		this.props.getUserSpots()
	}

	displayUserSpots = () => {
		return (
			<ul>
				{this.props.spotsReducer.userSpots.length !== 0
					? this.props.spotsReducer.userSpots.map(spot => <li>{spot.description}</li>)
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

const mapStateToProps = state => state

export default connect(
	mapStateToProps,
	actions
)(StatsPage)
