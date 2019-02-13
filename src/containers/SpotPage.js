import React, { Component, Fragment } from 'react'
import { Image, Container, Card } from 'semantic-ui-react'
import TextLogo from '../components/TextLogo'
// import { connect } from 'react-redux'

const containerStyle = {
	// display: 'flex',
	// justifyContent: 'center',
	margin: '25px',
	height: '90%',
	width: '90%'
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
				<Container style={containerStyle}>
					<Image style={imageStyle} src={this.renderImage()} />
					<p>{this.renderDescription()}</p>
					<p>Latitude: {this.renderLatitude()}</p>
					<p>Longitude: {this.renderLongitude()}</p>
				</Container>
			</Fragment>
		)
	}
}

// const mapStateToProps = state => ({
// 	state
// })

// export default connect(mapStateToProps)(SpotPage)
export default SpotPage
