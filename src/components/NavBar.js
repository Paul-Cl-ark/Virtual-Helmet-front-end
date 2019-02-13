import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { toggleMenu, removeSpotForm, removeNewMarker, removePopUp } from '../actions'
import Logo from './Logo'

const navBarStyle = {
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
	handleClick = () => {
		if (this.props.user) {
			this.props.toggleMenu()
			this.props.removeSpotForm()
			this.props.removeNewMarker()
			this.props.removePopUp()
		} else {
			toast.info('Please log in to do that!')
		}
	}

	render() {
		return (
			<Fragment>
				<div style={navBarStyle} onClick={this.handleClick}>
					<Logo />
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	user: state.users.user
})

export default connect(
	mapStateToProps,
	{ toggleMenu, removeSpotForm, removeNewMarker, removePopUp }
)(NavBar)
