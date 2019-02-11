import React, { Component } from 'react'
import { connect } from 'react-redux'
import { rateSpot } from '../actions'
import { Card, Icon } from 'semantic-ui-react'

class RatingButtons extends Component {
	render() {
		const spot = this.props.selectedSpot
		const { rating, _id } = spot
		return (
			<Card.Content extra>
				Rating : {rating}
				<a onClick={() => this.props.rateSpot(_id, 1)}>
					<Icon name="thumbs up outline" />
				</a>
				<a onClick={() => this.props.rateSpot(_id, -1)}>
					<Icon name="thumbs down outline" />
				</a>
			</Card.Content>
		)
	}
}

const mapStateToProps = state => ({
	selectedSpot: state.spots.selectedSpot
})

export default connect(
	mapStateToProps,
	{ rateSpot }
)(RatingButtons)
