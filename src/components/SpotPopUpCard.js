import React, { Component } from 'react'
import { connect } from 'react-redux'
import RatingButtons from './RatingButtons'
import { Card, Image } from 'semantic-ui-react'

class SpotPopUpCard extends Component {
	renderRatingButtons = () => (this.props.renderRatingButtons ? <RatingButtons /> : null)
	render() {
		const spot = this.props.selectedSpot
		const { type, image, date, description, latitude, longitude } = spot
		return (
			<Card>
				<Image src={image} />
				<Card.Content>
					<Card.Header>{description}</Card.Header>
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
	renderRatingButtons: state.appActions.renderRatingButtons
})

export default connect(mapStateToProps)(SpotPopUpCard)
