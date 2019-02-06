import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import RegisterForm from '../components/RegisterForm'
import HomeOrLoginButton from '../components/HomeOrLoginButton'

class RegisterPage extends Component {
	state = {}
	render() {
		return (
			<Fragment>
				<RegisterForm />
				<HomeOrLoginButton />
			</Fragment>
		)
	}
}

export default connect(
	null,
	actions
)(RegisterPage)
