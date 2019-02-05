import React, { Component, Fragment } from 'react'
import MapContainer from './MapContainer'
import RegisterOrLoginButton from '../components/RegisterOrLoginButton'

class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<Fragment>
				<MapContainer />
				<RegisterOrLoginButton />
			</Fragment>
		)
	}
}

export default LandingPage
