import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popup } from 'react-map-gl'
import SpotPopUpCard from './SpotPopUpCard'
import { deSelectSpot, removePopUp } from '../actions'

const popUpStyle = {
	width: '100px'
}

class SpotPopUp extends Component {
	render() {
		const selectedSpot = this.props.selectedSpot

		return (
			<Popup
				tipSize={5}
				style={popUpStyle}
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

const mapStateToProps = state => ({
	selectedSpot: state.spots.selectedSpot
})

export default connect(
	mapStateToProps,
	{ deSelectSpot, removePopUp }
)(SpotPopUp)
