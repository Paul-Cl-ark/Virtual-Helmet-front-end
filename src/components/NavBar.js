import React, { Fragment } from 'react'

const divStyle = {
	backgroundColor: 'white',
	height: '60px',
	width: '60px',
	borderStyle: 'solid',
	borderColor: 'limeGreen',
	borderWidth: '3px',
	borderRadius: '50%',
	position: 'absolute',
	top: '20px',
	right: '20px'
}

const NavBar = props => {
	return (
		<Fragment>
			<div style={divStyle} />
		</Fragment>
	)
}

export default NavBar
