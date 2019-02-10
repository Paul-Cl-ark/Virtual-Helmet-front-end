import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleMenu, removeSpotForm, removeNewMarker, removePopUp } from '../actions'
import Logo from './Logo'

const divStyle = {
	backgroundColor: 'white',
	height: '55px',
	width: '55px',
	borderStyle: 'solid',
	borderColor: 'limeGreen',
	borderWidth: '3px',
	borderRadius: '50%',
	position: 'absolute',
	top: '20px',
	right: '20px',
	boxShadow: '4px 4px 4px grey',
	zIndex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}

class NavBar extends Component {
	render() {
		return (
			<Fragment>
				<div
					style={divStyle}
					onClick={() => {
						this.props.toggleMenu()
						this.props.removeSpotForm()
						this.props.removeNewMarker()
						this.props.removePopUp()
					}}>
					<Logo />
				</div>
			</Fragment>
		)
	}
}

export default connect(
	null,
	{ toggleMenu, removeSpotForm, removeNewMarker, removePopUp }
)(NavBar)
