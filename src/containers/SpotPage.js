import React, { Component, Fragment } from 'react'
import { Image, Container, Header } from 'semantic-ui-react'
// import { connect } from 'react-redux'

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
				<Container>
					<Image src={this.renderImage()} />
					<p>{this.renderDescription()}</p>
					<p>
						Latitude: {this.renderLatitude()}, Longitude: {this.renderLongitude()}
					</p>
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
