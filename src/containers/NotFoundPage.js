import React, { Component } from 'react'

const imgStyle = {
	height: '100vh',
	width: '100%'
}

class NotFound extends Component {
	render() {
		return (
			<img style={imgStyle} src="/images/404.jpeg" alt="404 not found error, please press back" />
		)
	}
}

export default NotFound
