import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Icon, Image } from 'semantic-ui-react'

class SpotPopUpCard extends Component {
	render() {
		const selectedSpot = this.props.selectedSpot

		return (
			<Card>
				<Image src={selectedSpot.image} />
				<Card.Content>
					<Card.Header>{selectedSpot.description}</Card.Header>
					<Card.Meta>Date added</Card.Meta>
					<Card.Description>
						{selectedSpot.latitude} - {selectedSpot.longitude}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name="thumbs up outline" />
						{selectedSpot.rating}
					</a>
				</Card.Content>
			</Card>
		)
	}
}

const mapStateToProps = state => ({ selectedSpot: state.spots.selectedSpot })

export default connect(mapStateToProps)(SpotPopUpCard)