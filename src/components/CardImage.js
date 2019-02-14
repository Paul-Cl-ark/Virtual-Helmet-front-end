import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

const imageStyle = {
	maxHeight: '150px',
	width: 'auto'
}

class CardImage extends Component {
	render() {
		const spot = this.props.selectedSpot
		const { image, _id } = spot

		return (
			<Image style={imageStyle} key={_id} src={image} onClick={event => event.preventDefault()} />
		)
	}
}

const mapStateToProps = state => ({
	selectedSpot: state.spots.selectedSpot
})

export default connect(mapStateToProps)(CardImage)
