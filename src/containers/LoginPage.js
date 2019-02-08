import React, { Component, Fragment } from 'react'
import LoginForm from '../components/LoginForm'
import HomeRegisterLogInButton from '../components/HomeRegisterLogInButton'

class LoginPage extends Component {
	state = {}
	render() {
		return (
			<Fragment>
				<LoginForm />
				<HomeRegisterLogInButton />
			</Fragment>
		)
	}
}

export default LoginPage
