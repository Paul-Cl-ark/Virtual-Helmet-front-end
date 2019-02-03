import React, { Component, Fragment } from 'react'
import MapContainer from './MapContainer'

class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<Fragment>
				<MapContainer />
			</Fragment>
		)
	}
}

export default LandingPage
