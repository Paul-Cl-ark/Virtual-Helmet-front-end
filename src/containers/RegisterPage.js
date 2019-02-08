import React, { Component, Fragment } from 'react'
import RegisterForm from '../components/RegisterForm'
import HomeRegisterLogInButton from '../components/HomeRegisterLogInButton'

class RegisterPage extends Component {
	state = {}
	render() {
		return (
			<Fragment>
				<RegisterForm />
				<HomeRegisterLogInButton />
			</Fragment>
		)
	}
}

export default RegisterPage
