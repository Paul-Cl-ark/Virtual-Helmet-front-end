import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

class CardImage extends Component {
	render() {
		const spot = this.props.selectedSpot
		const { image, _id } = spot

		return (
			<a href={image}>
				<Image key={_id} src={image} onClick={event => event.preventDefault()} />
			</a>
		)
	}
}

const mapStateToProps = state => ({
	selectedSpot: state.spots.selectedSpot
})

export default connect(mapStateToProps)(CardImage)
