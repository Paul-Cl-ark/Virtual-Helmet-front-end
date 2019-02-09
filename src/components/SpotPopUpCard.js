import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'

class SpotPopUpCard extends Component {
	render() {
		const { image, date, description, latitude, longitude, rating } = this.props.selectedSpot
		return (
			<Card>
				<Image src={image} />
				<Card.Content>
					<Card.Header>{description}</Card.Header>
					<Card.Meta>Date added: {date}</Card.Meta>
					<Card.Description>
						Latitude: {latitude}, Longitude: {longitude}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					Rating : {rating}
					<a>
						<Icon name="thumbs up outline" />
					</a>
					<a>
						<Icon name="thumbs down outline" />
					</a>
				</Card.Content>
			</Card>
		)
	}
}

const mapStateToProps = state => ({ selectedSpot: state.spots.selectedSpot })

export default connect(mapStateToProps)(SpotPopUpCard)
