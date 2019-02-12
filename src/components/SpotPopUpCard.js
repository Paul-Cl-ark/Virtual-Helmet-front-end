import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { goToSpotPage } from '../actions'
import RatingButtons from './RatingButtons'
import CardImage from './CardImage'
import { Card } from 'semantic-ui-react'

class SpotPopUpCard extends Component {
	renderRatingButtons = () =>
		this.props.renderRatingButtons && this.props.selectedSpot.type !== 'theft' ? (
			<RatingButtons />
		) : null
	render() {
		const spot = this.props.selectedSpot
		const { _id, type, date, description, latitude, longitude } = spot
		const momentDate = moment(date)
			.endOf('day')
			.fromNow()
		const imageContent = this.props.user ? (
			<CardImage />
		) : (
			<Card.Meta>'Please log in to see more' </Card.Meta>
		)

		return (
			<Card key={_id}>
				{imageContent}
				<Card.Content>
					<Card.Header style={{ overflow: 'auto', maxHeight: 150 }}>{description}</Card.Header>
					<Card.Meta>
						Date added:{momentDate}, type: {type}
					</Card.Meta>
					<Card.Description>
						Latitude: {latitude}, Longitude: {longitude}
						<a onClick={() => this.props.goToSpotPage(_id)}>See more!</a>
					</Card.Description>
				</Card.Content>
				{this.renderRatingButtons()}
			</Card>
		)
	}
}

const mapStateToProps = state => ({
	selectedSpot: state.spots.selectedSpot,
	renderRatingButtons: state.appActions.renderRatingButtons,
	user: state.users.user
})

export default connect(
	mapStateToProps,
	{ goToSpotPage }
)(SpotPopUpCard)
