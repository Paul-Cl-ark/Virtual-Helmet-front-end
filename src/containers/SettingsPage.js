import React, { Component, Fragment } from 'react'
import ThemeSelect from '../components/ThemeSelect'

class SettingsPage extends Component {
	state = {}
	render() {
		return (
			<Fragment>
				Settings Page - user will be able to change the colour theme of the app
				<ThemeSelect />
			</Fragment>
		)
	}
}

export default SettingsPage
