import React, { Component } from 'react'

const imgStyle = {
	height: '100vh',
	width: 'auto'
}

class NotFound extends Component {
	render() {
		return (
			<img style={imgStyle} src="/images/404.jpeg" alt="404 not found error, please press back" />
		)
	}
}

export default NotFound
