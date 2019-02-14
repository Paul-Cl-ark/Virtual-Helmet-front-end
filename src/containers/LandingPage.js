import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import SpotForm from '../components/SpotForm'
import OrButton from '../components/OrButton'

const buttonStyle = {
	position: 'absolute',
	display: 'flex',
	justifyContent: 'center',
	bottom: '6px',
	marginLeft: 'auto',
	marginRight: 'auto',
	left: 0,
	right: 0,
	zIndex: 1,
	size: 'large'
}

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
				<div style={buttonStyle}>{this.renderOrButton()}</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	renderSpotForm: state.app.renderSpotForm,
	renderOrButton: state.app.renderOrButton
})

export default connect(mapStateToProps)(LandingPage)
