import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeSpotForm, addNewSpot, removeNewMarker } from '../actions'

import { Form, TextArea, Button, Dropdown } from 'semantic-ui-react'

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

const spotTypes = [{ text: 'Danger', value: 'danger' }]

class NewSpotForm extends Component {
	state = { newSpotDescription: '', selectedFile: null, loaded: 0, type: '' }

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

	handleDropdownChange = (event, data) => {
		this.setState({ type: data.value })
	}

	handleFormSubmit = event => {
		event.preventDefault()

		const file = this.state.selectedFile
		let formData = null
		if (file) {
			formData = new FormData()
			formData.append('file', file, file.name)
		}

		this.props.addNewSpot({
			type: this.state.type,
			description: this.state.newSpotDescription,
			latitude: this.props.selectedLat,
			longitude: this.props.selectedLng,
			image: formData
		})
		this.props.removeSpotForm()
	}

	handleFormClose = () => {
		this.props.removeSpotForm()
		this.props.removeNewMarker()
	}

	render() {
		return (
			<Form style={formStyle} onSubmit={this.handleFormSubmit}>
				<Form.Field required>
					<label>Add description</label>
					<TextArea
						onChange={(event, data) => this.handleChange(event, data)}
						label="Description"
						placeholder="Description"
						name="newSpotDescription"
						required
					/>
				</Form.Field>
				<input type="file" onChange={this.handleSelectedFile} />
				<Form.Field required>
					<label>Add type</label>
					<Dropdown
						selection
						placeholder="Select type"
						options={spotTypes}
						onChange={this.handleDropdownChange}
					/>
				</Form.Field>
				<Button type="submit">Add</Button>
				<Button onClick={this.handleFormClose}>Cancel</Button>
				{/* <div>{Math.round(this.state.loaded, 2)} %</div> */}
			</Form>
		)
	}
}

const mapStateToProps = state => ({
	selectedLat: state.spots.selectedLat,
	selectedLng: state.spots.selectedLng
})

export default connect(
	mapStateToProps,
	{ removeSpotForm, addNewSpot, removeNewMarker }
)(NewSpotForm)
