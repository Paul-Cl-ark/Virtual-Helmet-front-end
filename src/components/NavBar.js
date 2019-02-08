import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { toggleMenu, removeSpotForm, removeNewMarker } from '../actions'

const divStyle = {
	backgroundColor: 'white',
	height: '50px',
	width: '50px',
	borderStyle: 'solid',
	borderColor: 'limeGreen',
	borderWidth: '3px',
	borderRadius: '50%',
	position: 'absolute',
	top: '20px',
	right: '20px',
	color: 'black',
	textAlign: 'center',
	boxShadow: '4px 4px 4px grey',
	zIndex: 1
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
					}}>
					pic
				</div>
			</Fragment>
		)
	}
}

export default connect(
	null,
	{ toggleMenu, removeSpotForm, removeNewMarker }
)(NavBar)
