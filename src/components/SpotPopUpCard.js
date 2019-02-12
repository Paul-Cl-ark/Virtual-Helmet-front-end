import React, { Component } from 'react'
import { connect } from 'react-redux'
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
		const { type, date, description, latitude, longitude } = spot
		const imageContent = this.props.user ? (
			<CardImage />
		) : (
			<Card.Meta>'Please log in to see more' </Card.Meta>
		)

		return (
			<Card>
				{imageContent}
				<Card.Content>
					<Card.Header style={{ overflow: 'auto', maxHeight: 150 }}>{description}</Card.Header>
					<Card.Meta>
						Date added: {date}, type: {type}
					</Card.Meta>
					<Card.Description>
						Latitude: {latitude}, Longitude: {longitude}
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

export default connect(mapStateToProps)(SpotPopUpCard)
