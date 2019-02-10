import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import SpotForm from '../components/SpotForm'
import OrButton from '../components/OrButton'

class LandingPage extends Component {
	renderSpotForm = () => {
		return this.props.renderSpotForm ? <SpotForm /> : null
	}
	renderOrButton = () => (this.props.renderOrButton ? <OrButton /> : null)

	render() {
		return (
			<Fragment>
				<Map />
				{this.renderSpotForm()}
				{this.renderOrButton()}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	renderSpotForm: state.appActions.renderSpotForm,
	renderOrButton: state.appActions.renderOrButton
})

export default connect(mapStateToProps)(LandingPage)
