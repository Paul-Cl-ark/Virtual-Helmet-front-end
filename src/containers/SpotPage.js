import React, { Component, Fragment } from 'react'
import { Image, Container, Header } from 'semantic-ui-react'
// import { connect } from 'react-redux'

class SpotPage extends Component {
	state = { spot: null }
	componentDidMount() {
		const { id } = this.props.match.params
		fetch(`/API/spots/${id}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ spot: data })
			})
	}

	renderImage = () => {
		return this.state.spot ? this.state.spot.image : null
	}

	render() {
		return (
			<Fragment>
				<Container>
					<Image src={this.renderImage()} />
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
