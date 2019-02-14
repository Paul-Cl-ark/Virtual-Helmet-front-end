import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { goToHome, goToLogIn, goToSignUp } from '../actions'
import { Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'

const buttonContainerStyle = {
	maxWidth: '300px',
	width: '80vh',
	flex: '1 1 auto',
	display: 'flex',
	alignItems: 'flex-end',
	margin: '54px auto 15px'
}

class OrButton extends Component {
	buttonText = () => {
		let path = this.props.location.pathname
		let buttonText = {}
		switch (path) {
			case '/register':
				return (buttonText = { a: 'Home', b: 'Log In' })
			case '/login':
				return (buttonText = { a: 'Home', b: 'Sign Up' })
			case '/':
				return (buttonText = { a: 'Log In', b: 'Sign Up' })
			default:
				break
		}
		return buttonText
	}

	render() {
		const textA = this.buttonText().a
		const textB = this.buttonText().b
		const regexTextA = textA.replace(/\s+/g, '')
		const regexTextB = textB.replace(/\s+/g, '')

		return (
			<Button.Group size="large" style={buttonContainerStyle}>
				<Button onClick={this.props[`goTo${regexTextA}`]}>{textA}</Button>
				<Button.Or onClick={() => toast('Wear a Helmet!')} />
				<Button onClick={this.props[`goTo${regexTextB}`]}>{textB}</Button>
			</Button.Group>
		)
	}
}

export default connect(
	null,
	{ goToHome, goToLogIn, goToSignUp }
)(withRouter(OrButton))
