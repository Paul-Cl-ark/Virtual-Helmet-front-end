import React, { Component } from 'react'

const imgStyle = {
	minHeight: '100%',
	minWidth: '1024px',
	width: '100%',
	height: 'auto',
	position: 'fixed',
	top: 0,
	left: 0
}

class NotFound extends Component {
	render() {
		return (
			<img style={imgStyle} src="/images/404.jpeg" alt="404 not found error, please press back" />
		)
	}
}

export default NotFound
