import React, { Component, Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import ThemeSelect from '../components/ThemeSelect'
import TextLogo from '../components/TextLogo'

const containerStyle = {
	display: 'flex',
	justifyContent: 'center',
	margin: '25px',
	height: '90%',
	width: '90%'
}

class SettingsPage extends Component {
	render() {
		return (
			<Fragment>
				<TextLogo />
				<Container style={containerStyle}>
					<ThemeSelect />
				</Container>
			</Fragment>
		)
	}
}

export default SettingsPage
