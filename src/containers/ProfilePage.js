import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { uploadProfilePhoto, goToSpotPage } from '../actions'
import TextLogo from '../components/TextLogo'
import { Label, Segment, Header, Icon, Button, Image } from 'semantic-ui-react'

const containerStyle = {
	justifyContent: 'center',
	margin: 'auto',
	width: '90%',
	maxWidth: '400px'
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
				name="user plus"
				onClick={() => this.setState({ showUploadForm: !this.state.showUploadForm })}
			/>
		)
	}

	totalUpVotes = () => {
		let totalUpVotes = 0
		for (let spot of this.props.userSpots) {
			totalUpVotes += spot.rating
		}
		return totalUpVotes
	}

	mostUpVoted = () => {
		let spot = null
		if (this.props.userSpots.length > 0) {
			spot = this.props.userSpots.reduce((a, b) => {
				return a.rating > b.rating ? a : b
			})
		}
		return spot ? spot._id : null
	}

	mostUpVotedVotes = () => Math.max.apply(Math, this.props.userSpots.map(spot => spot.rating))

	totalCurrentUserVotes = () => {
		return this.props.allSpots.filter(spot =>
			spot.raters.filter(rating => rating.user === this.props.user._id)
		).length
	}

	render() {
		const { firstName, lastName, date } = this.props.user
		const momentDate = moment(date).format('LL')
		return (
			<Fragment>
				<TextLogo />
				<Segment raised style={containerStyle}>
					<div>
						<Header as="h1">
							{this.userImage()}
							<Header.Content>{firstName + ' ' + lastName}</Header.Content>
						</Header>
						{this.showUploadForm()}
						<Header
							as="h4"
							style={{ borderBottom: `solid ${this.props.colour} 3px`, width: '100px' }}>
							Member since:
						</Header>
						<p>{momentDate}</p>
						<Header as="h4">Your current rating:</Header>
						<Label ribbon color={this.props.colour}>
							The total of up and downvotes on your spots, wow!
						</Label>
						<p>{this.totalUpVotes()}</p>
						<Header as="h4">Your most upvoted spot:</Header>
						<Label ribbon color={this.props.colour}>
							The highest rated spot you've added, nice job!
						</Label>
						<p>
							<a onClick={() => this.props.goToSpotPage(this.mostUpVoted())}>Show me!</a>
						</p>
						<Header as="h4">Total votes:</Header>
						<Label ribbon color={this.props.colour}>
							How many times you have rated a spot, keep it up!
						</Label>
						<p>{this.totalCurrentUserVotes()}</p>
					</div>
				</Segment>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	user: state.users.user,
	userSpots: state.spots.userSpots,
	allSpots: state.spots.spots,
	colour: state.app.theme
})

export default connect(
	mapStateToProps,
	{ uploadProfilePhoto, goToSpotPage }
)(ProfilePage)
