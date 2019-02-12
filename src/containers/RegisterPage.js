import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import OrButton from '../components/OrButton'

class RegisterPage extends Component {
	renderOrButton = () => (this.props.renderOrButton ? <OrButton /> : null)

	render() {
		return (
			<Fragment>
				<RegisterForm />
				{this.renderOrButton()}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	renderOrButton: state.app.renderOrButton
})

export default connect(mapStateToProps)(RegisterPage)
