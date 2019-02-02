import React, { Component } from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

class NewSpotForm extends Component {
	state = { newSpotDescription: '' }

	handleChange = (event, data) => {
		this.setState({
			[data.name]: data.value
		})
	}

	handleFormSubmit = event => {
		event.preventDefault()
		this.props.getNewSpotDescription(this.state.newSpotDescription)
	}

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
