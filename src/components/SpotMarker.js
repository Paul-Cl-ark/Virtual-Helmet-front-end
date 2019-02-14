import React, { Component } from 'react'

const imgStyle = {
	width: '28px',
	height: '28px'
}

class SpotMarker extends Component {
	render() {
		const { onClick, type } = this.props
		return <img onClick={onClick} style={imgStyle} src={`/images/${type}-icon.svg`} />
	}
}

export default SpotMarker
