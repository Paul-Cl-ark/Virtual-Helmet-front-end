import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { goToSpotPage } from '../actions'
import RatingButtons from './RatingButtons'
import CardImage from './CardImage'
import { Card } from 'semantic-ui-react'

const popUpStyle = {
	width: '65vw',
	maxHeight: '55vh'
}

const descriptionStyle = {
	overflow: 'auto',
	height: '70px'
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
			<Card.Meta>Log in or sign up to see photos here</Card.Meta>
		)
		const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)
		const link =
			this.props.selectedSpot.type !== 'theft' ? (
				<Card.Description>
					<p>
						<a onClick={() => this.props.goToSpotPage(_id)}>See more!</a>
					</p>
				</Card.Description>
			) : null
		return (
			<Card key={_id} style={popUpStyle}>
				{imageContent}
				<Card.Content>
					{link}
					<Card.Meta>
						<p>Date added: {momentDate}</p>
						<p>
							Type: {capitalizedType}
							<img style={{ height: '20px', width: '20px' }} src={`/images/${type}-icon.svg`} />
						</p>
					</Card.Meta>
					<div style={descriptionStyle}>
						<Card.Description>{description}</Card.Description>
						<Card.Meta>
							Latitude: {latitude}, Longitude: {longitude}
						</Card.Meta>
					</div>
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
