import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Image } from 'semantic-ui-react'

class CardImage extends Component {
	render() {
		const spot = this.props.selectedSpot
		const { image } = spot

		return (
			<a href={image}>
				<Image src={image} />
			</a>
		)
	}
}

const mapStateToProps = state => ({
	selectedSpot: state.spots.selectedSpot
})

export default connect(mapStateToProps)(CardImage)
