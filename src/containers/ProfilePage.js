import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { uploadProfilePhoto } from '../actions'
import TextLogo from '../components/TextLogo'
import { Container, Header, Icon, Button, Image } from 'semantic-ui-react'

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
			this.props.uploadProfilePhoto(formData)
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

	totalUpVotes = () => {
		let totalUpVotes = 0
		for (let spot of this.props.spots) {
			totalUpVotes += spot.rating
		}
		return totalUpVotes
	}

	mostUpVoted = () => {
		let spot = null
		if (this.props.spots.length > 0) {
			spot = this.props.spots.reduce((a, b) => {
				return a.rating > b.rating ? a : b
			})
		}
		return spot ? spot._id : null
	}

	mostUpVotedVotes = () => Math.max.apply(Math, this.props.spots.map(spot => spot.rating))

	totalCurrentUserVotes = () => {
		return this.props.spots.filter(spot =>
			spot.raters.filter(rating => rating.user === this.props.user._id)
		).length
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
						<Header as="h4">Total votes of all current user spots:</Header>
						<p>{this.totalUpVotes()}</p>
						<Header as="h4">Your most upvoted spot:</Header>
						<p>{this.mostUpVoted()}</p>
						<Header as="h4">Total current user votes:</Header>
						<p>{this.totalCurrentUserVotes()}</p>
					</div>
				</Container>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	user: state.users.user,
	spots: state.spots.spots.filter(spot => spot.user._id === state.users.user._id)
})

export default connect(
	mapStateToProps,
	{ uploadProfilePhoto }
)(ProfilePage)
