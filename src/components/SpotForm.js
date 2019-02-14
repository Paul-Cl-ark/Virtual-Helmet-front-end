import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { removeSpotForm, addNewSpot, removeNewMarker } from '../actions'

import { Form, TextArea, Button, Dropdown, Card } from 'semantic-ui-react'

const formStyle = {
	backgroundColor: 'white',
	borderStyle: 'solid',
	position: 'absolute',
	borderWidth: '3px',
	padding: '10px',
	boxShadow: '4px 4px 4px grey',
	top: '42%',
	width: '70%',
	left: 0,
	right: 0,
	margin: 'auto',
	zIndex: 1,
	maxWidth: '350px'
}

const spotTypes = [
	{
		image: {
			src: '/images/danger-icon.svg'
		},
		text: 'Danger',
		value: 'danger'
	},
	{
		image: {
			src: '/images/works-icon.svg'
		},
		text: 'Works',
		value: 'works'
	},
	{
		image: {
			src: '/images/pothole-icon.svg'
		},
		text: 'Pothole',
		value: 'pothole'
	},
	{
		image: {
			src: '/images/steepIncline-icon.svg'
		},
		text: 'Steep incline',
		value: 'steepIncline'
	},
	{
		image: {
			src: '/images/hiddenBollard-icon.svg'
		},
		text: 'Bollard on cycle path',
		value: 'hiddenBollard'
	}
]

//closed road, speed bumps, temporary traffic lights, cycle lane closure, puddle, bottle neck, bollards, steep climb, blind corner, cars parked on cycle lane, blind exit

class SpotForm extends Component {
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
		if (!this.state.type) {
			return toast.warn('Please add a spot type')
		}
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
			<Card style={{ ...formStyle, borderColor: this.props.colour }}>
				<Form onSubmit={this.handleFormSubmit}>
					<Form.Field required>
						<label>Add description</label>
						<TextArea
							onChange={(event, data) => this.handleChange(event, data)}
							label="Description"
							placeholder="Description..."
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
			</Card>
		)
	}
}

const mapStateToProps = state => ({
	selectedLat: state.spots.selectedLat,
	selectedLng: state.spots.selectedLng,
	colour: state.app.theme
})

export default connect(
	mapStateToProps,
	{ removeSpotForm, addNewSpot, removeNewMarker }
)(SpotForm)
