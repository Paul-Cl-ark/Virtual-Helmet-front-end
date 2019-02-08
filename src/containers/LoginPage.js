import React, { Component, Fragment } from 'react'
import LoginForm from '../components/LoginForm'
import HomeOrRegisterButton from '../components/HomeOrRegisterButton'

class LoginPage extends Component {
	state = {}
	render() {
		return (
			<Fragment>
				<LoginForm />
				<HomeOrRegisterButton />
			</Fragment>
		)
	}
}

export default LoginPage
