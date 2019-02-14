import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import SpotForm from '../components/SpotForm'
import OrButton from '../components/OrButton'

const buttonStyle = {
	position: 'absolute',
	display: 'flex',
	justifyContent: 'center',
	bottom: '20px',
	marginLeft: '60px',
	marginRight: '60px',
	left: 0,
	right: 0,
	zIndex: 1
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
