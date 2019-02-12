import React, { Component } from 'react'

const imgStyle = {
	width: '20px',
	height: '20px'
}

class TheftMarker extends Component {
	render() {
		const { onClick } = this.props
		return <img onClick={onClick} style={imgStyle} src={'/images/Theft-Icon-M.png'} />
	}
}

export default TheftMarker
