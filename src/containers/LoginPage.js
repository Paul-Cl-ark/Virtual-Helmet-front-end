import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import OrButton from '../components/OrButton'

class LoginPage extends Component {
	renderOrButton = () => (this.props.renderOrButton ? <OrButton /> : null)

	render() {
		return (
			<Fragment>
				<LoginForm />
				{this.renderOrButton()}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	renderOrButton: state.appActions.renderOrButton
})

export default connect(mapStateToProps)(LoginPage)
