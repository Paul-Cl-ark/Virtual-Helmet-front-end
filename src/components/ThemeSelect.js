import React, { Component, Fragment } from 'react'
import { Dropdown } from 'semantic-ui-react'

const colourOptions = [
	{ text: 'Green', value: 'green' },
	{ text: 'Blue', value: 'blue' },
	{ text: 'Red', value: 'red' },
	{ text: 'Black', value: 'black' }
]

class ThemeSelect extends Component {
	state = {
		selectedTheme: 'green'
	}

	onChange = (event, data) => {
		console.log(data.value)
		this.setState({ selectedTheme: data.value })
	}

	render() {
		return (
			<Dropdown
				onChange={this.onChange}
				placeholder="Select Theme"
				fluid
				selection
				options={colourOptions}
			/>
		)
	}
}

export default ThemeSelect
