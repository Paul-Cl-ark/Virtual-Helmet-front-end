import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { goToSpotPage } from '../actions'
import RatingButtons from './RatingButtons'
import CardImage from './CardImage'
import { Card } from 'semantic-ui-react'

const popUpStyle = {
	width: '60vw',
	height: '40vh',
	overflow: 'auto'
}

class SpotPopUpCard extends Component {
	renderRatingButtons = () =>
		this.props.renderRatingButtons && this.props.selectedSpot.type !== 'theft' ? (
			<RatingButtons />
		) : null
	render() {
		const spot = this.props.selectedSpot
		const { _id, type, date, description, latitude, longitude } = spot
		const momentDate = moment(date).format('LL')
		const imageContent = this.props.user ? (
			<CardImage />
		) : (
			<Card.Meta>'Please log in to see more' </Card.Meta>
		)
		const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)
		return (
			<Card key={_id} style={popUpStyle}>
				{imageContent}
				<Card.Content>
					<Card.Header>{description}</Card.Header>
					<Card.Meta>
						<p>Date added: {momentDate}</p>
						<p>
							Type:
							<img style={{ height: '20px', width: '20px' }} src={`/images/${type}-icon.svg`} />
							{capitalizedType}
						</p>
					</Card.Meta>
					<Card.Description>
						Latitude: {latitude}, Longitude: {longitude}
						<p>
							<a onClick={() => this.props.goToSpotPage(_id)}>See more!</a>
						</p>
					</Card.Description>
				</Card.Content>
				{this.renderRatingButtons()}
			</Card>
		)
	}
}

const mapStateToProps = state => ({
	selectedSpot: state.spots.selectedSpot,
	renderRatingButtons: state.app.renderRatingButtons,
	user: state.users.user
})

export default connect(
	mapStateToProps,
	{ goToSpotPage }
)(SpotPopUpCard)
