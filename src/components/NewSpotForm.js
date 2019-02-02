import React, { Component } from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

class NewSpotForm extends Component {
	constructor(props) {
		super(props)
		this.state = { newSpotDescription: '' }
	}

	handleChange = (event, data) => {
		this.setState({
			[data.name]: data.value
		})
	}

	handleFormSubmit = () => {}

	render() {
		return (
			<Form onSubmit={this.handleFormSubmit}>
				<label>Add description</label>
				<TextArea
					onChange={(event, data) => this.handleChange(event, data)}
					label="Description"
					placeholder="Description"
					name="newSpotDescription"
				/>
				<Button type="submit">Add!</Button>
			</Form>
		)
	}
}

export default NewSpotForm
