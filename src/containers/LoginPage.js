import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
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

export default connect(
	null,
	actions
)(LoginPage)
