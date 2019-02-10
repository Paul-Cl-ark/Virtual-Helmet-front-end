import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import NewSpotForm from '../components/NewSpotForm'
import OrButton from '../components/OrButton'

class LandingPage extends Component {
	renderNewSpotForm = () => {
		return this.props.renderSpotForm ? <NewSpotForm /> : null
	}
	renderOrButton = () => (this.props.renderOrButton ? <OrButton /> : null)

	render() {
		return (
			<Fragment>
				<Map />
				{this.renderNewSpotForm()}
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
