import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTheme } from '../actions'
import { Dropdown } from 'semantic-ui-react'

const colourOptions = [
	{ label: { color: 'green', empty: true, circular: true }, text: 'Green', value: 'green' },
	{ label: { color: 'blue', empty: true, circular: true }, text: 'Blue', value: 'blue' },
	{ label: { color: 'red', empty: true, circular: true }, text: 'Red', value: 'red' },
	{ label: { color: 'black', empty: true, circular: true }, text: 'Black', value: 'black' }
]

class ThemeSelect extends Component {
	state = {
		selectedTheme: ''
	}

	onChange = (event, data) => {
		this.props.changeTheme(data.value)
	}

	render() {
		return (
			<Dropdown
				text="Choose default theme"
				onChange={this.onChange}
				fluid
				selection
				options={colourOptions}
			/>
		)
	}
}

export default connect(
	null,
	{ changeTheme }
)(ThemeSelect)
