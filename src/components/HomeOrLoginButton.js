import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Button } from 'semantic-ui-react'

const buttonStyle = {
	position: 'absolute',
	bottom: '35px',

	paddingLeft: '60px',
	paddingRight: '60px',
	left: 0,
	right: 0,
	margin: 'auto',
	zIndex: 1
}

class HomeOrLoginButton extends Component {
	state = {}
	render() {
		return (
			<Button.Group size="large" style={buttonStyle}>
				<Button onClick={this.props.goToHome}>Home</Button>
				<Button.Or />
				<Button onClick={this.props.goToLogin}>Log In</Button>
			</Button.Group>
		)
	}
}

export default connect(
	null,
	actions
)(HomeOrLoginButton)
