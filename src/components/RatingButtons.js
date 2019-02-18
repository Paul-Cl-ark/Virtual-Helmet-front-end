import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { rateSpot } from '../actions'
import { Card, Icon } from 'semantic-ui-react'

class RatingButtons extends Component {
	handleRating = value => {
		const { user, _id } = this.props.spot
		if (this.props.userId !== user) {
			return this.props.rateSpot(_id, value)
		}
		toast.warn("You can't vote on your own spot!")
	}

	render() {
		const { rating } = this.props.spot

		return (
			<Card.Content extra>
				Rating : {rating}
				<div onClick={() => this.handleRating(1)}>
					<Icon name="thumbs up outline" />
				</div>
				<div onClick={() => this.handleRating(-1)}>
					<Icon name="thumbs down outline" />
				</div>
			</Card.Content>
		)
	}
}

const mapStateToProps = state => ({
	spot: state.spots.selectedSpot,
	userId: state.users.user.id
})

export default connect(
	mapStateToProps,
	{ rateSpot }
)(RatingButtons)
