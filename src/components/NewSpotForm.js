import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

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
		this.props.addNewSpot({
			type: 'danger',
			description: this.state.newSpotDescription,
			latitude: this.props.spotsReducer.selectedLat,
			longitude: this.props.spotsReducer.selectedLng
		})
		this.props.removeSpotForm()
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
				<input type="file" />
				<Button type="submit">Add</Button>
				<Button onClick={this.props.removeSpotForm}>Cancel</Button>
			</Form>
		)
	}
}

const mapStateToProps = state => state

export default connect(
	mapStateToProps,
	actions
)(NewSpotForm)
