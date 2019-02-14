import React, { Component, Fragment } from 'react'
import { Image, Segment } from 'semantic-ui-react'
import TextLogo from '../components/TextLogo'

const containerStyle = {
	justifyContent: 'center',
	margin: 'auto',
	width: '90%',
	maxWidth: '400px'
}

const imageStyle = {
	margin: 'auto',
	marginBottom: '20px'
}

class SpotPage extends Component {
	componentDidMount() {
		const { id } = this.props.match.params
		fetch(`/API/spots/${id}`)
			.then(response => response.json())
			.then(data => {
				const { image, latitude, longitude, description } = data
				this.setState({ image, latitude, longitude, description })
			})
	}

	renderImage = () => {
		return this.state ? this.state.image : null
	}
	renderLatitude = () => {
		return this.state ? this.state.latitude : null
	}
	renderLongitude = () => {
		return this.state ? this.state.longitude : null
	}

	renderDescription = () => {
		return this.state ? this.state.description : null
	}

	render() {
		return (
			<Fragment>
				<TextLogo />
				<Segment raised style={containerStyle}>
					<Image style={imageStyle} src={this.renderImage()} />
					<p>{this.renderDescription()}</p>
					<p>Latitude: {this.renderLatitude()}</p>
					<p>Longitude: {this.renderLongitude()}</p>
				</Segment>
			</Fragment>
		)
	}
}

// const mapStateToProps = state => ({
// 	state
// })

// export default connect(mapStateToProps)(SpotPage)
export default SpotPage
