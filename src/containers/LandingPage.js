import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import NewSpotForm from '../components/NewSpotForm'

class LandingPage extends Component {
	renderNewSpotForm = () => {
		return this.props.renderSpotForm ? <NewSpotForm /> : null
	}

	render() {
		return (
			<Fragment>
				<Map />
				{this.renderNewSpotForm()}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	renderSpotForm: state.appActions.renderSpotForm
})

export default connect(mapStateToProps)(LandingPage)
