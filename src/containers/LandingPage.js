import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import MapContainer from './MapContainer'
import NewSpotForm from '../components/NewSpotForm'
import RegisterOrLoginButton from '../components/RegisterOrLoginButton'

class LandingPage extends Component {
	renderNewSpotForm = () => {
		return this.props.appActionsReducer.renderSpotForm ? <NewSpotForm /> : null
	}
	render() {
		return (
			<Fragment>
				<MapContainer />
				{this.renderNewSpotForm()}
				{!!!localStorage.getItem('user') ? <RegisterOrLoginButton /> : null}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

export default connect(
	mapStateToProps,
	actions
)(LandingPage)
