import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { Form, TextArea, Button } from 'semantic-ui-react'

const formStyle = {
	position: 'absolute',
	top: '45px',

	paddingLeft: '60px',
	paddingRight: '60px',
	left: 0,
	right: 0,
	margin: 'auto',
	zIndex: 1
}

class NewSpotForm extends Component {
	state = { newSpotDescription: '', selectedFile: null, loaded: 0 }

	handleChange = (event, data) => {
		this.setState({
			[data.name]: data.value
		})
	}

	handleSelectedFile = event => {
		this.setState({
			selectedFile: event.target.files[0],
			loaded: 0
		})
	}

	handleFormSubmit = event => {
		event.preventDefault()

		const formData = new FormData()
		formData.append('file', this.state.selectedFile, this.state.selectedFile.name)

		this.props.addNewSpot({
			type: 'danger',
			description: this.state.newSpotDescription,
			latitude: this.props.spotsReducer.selectedLat,
			longitude: this.props.spotsReducer.selectedLng,
			image: formData
		})
		this.props.removeSpotForm()
	}

	render() {
		return (
			<Form style={formStyle} onSubmit={this.handleFormSubmit}>
				<label>Add description</label>
				<TextArea
					onChange={(event, data) => this.handleChange(event, data)}
					label="Description"
					placeholder="Description"
					name="newSpotDescription"
				/>
				<input type="file" onChange={this.handleSelectedFile} />
				<Button type="submit">Add</Button>
				<Button onClick={this.props.removeSpotForm}>Cancel</Button>
				<div>{Math.round(this.state.loaded, 2)} %</div>
			</Form>
		)
	}
}

const mapStateToProps = state => state

export default connect(
	mapStateToProps,
	actions
)(NewSpotForm)
