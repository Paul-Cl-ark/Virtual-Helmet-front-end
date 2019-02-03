import React, { Fragment } from 'react'

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

const NavBar = props => {
	return (
		<Fragment>
			<div style={divStyle} onClick={props.openMenu}>
				P
			</div>
		</Fragment>
	)
}

export default NavBar
