import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapGL, { Popup } from 'react-map-gl'
import * as actions from '../actions'
import SpotPopUpCard from './SpotPopUpCard'

class SpotPopUp extends Component {
	render() {
		const selectedSpot = this.props.spotsReducer.selectedSpot

		return (
			<Popup
				tipSize={5}
				anchor="top"
				longitude={selectedSpot.longitude}
				latitude={selectedSpot.latitude}
				closeOnClick={false}
				onClose={() => {
					this.props.deSelectSpot()
					this.props.removePopUp()
				}}>
				<SpotPopUpCard />
			</Popup>
		)
	}
}

const mapStateToProps = state => state

export default connect(
	mapStateToProps,
	actions
)(SpotPopUp)
