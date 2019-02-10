import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Icon, Button, Image } from 'semantic-ui-react'
import API from '../API'
import TextLogo from '../components/TextLogo'

const containerStyle = {
	display: 'flex',
	justifyContent: 'center',
	margin: '25px',
	height: '90%',
	width: '90%'
}

class ProfilePage extends Component {
	state = {
		showUploadForm: false,
		selectedFile: null
	}

	handleSelectedFile = event => {
		this.setState({
			selectedFile: event.target.files[0],
			loaded: 0
		})
	}

	showUploadForm = () => {
		return this.state.showUploadForm ? (
			<Fragment>
				<input type="file" onChange={this.handleSelectedFile} />
				<Button onClick={this.addUserImage}>Add</Button>
			</Fragment>
		) : null
	}

	addUserImage = () => {
		const file = this.state.selectedFile
		let formData = null
		if (file) {
			formData = new FormData()
			formData.append('file', file, file.name)
			API.addUserImage(formData)
		}
	}

	userImage = () => {
		const image = this.props.user.image
		return image ? (
			<Image
				circular
				src={image}
				onClick={() => this.setState({ showUploadForm: !this.state.showUploadForm })}
			/>
		) : (
			<Icon
				name="user outline"
				onClick={() => this.setState({ showUploadForm: !this.state.showUploadForm })}
			/>
		)
	}

	render() {
		const { firstName, lastName, date } = this.props.user
		return (
			<Fragment>
				<TextLogo />
				<Container style={containerStyle}>
					<div>
						<Header as="h1">
							{this.userImage()}
							<Header.Content>{firstName + ' ' + lastName}</Header.Content>
						</Header>
						{this.showUploadForm()}
						<Header as="h4">Member since:</Header>
						<p>{date}</p>
					</div>
				</Container>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	user: state.users.user
})

export default connect(mapStateToProps)(ProfilePage)
