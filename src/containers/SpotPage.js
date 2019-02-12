import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'

class SpotPage extends Component {
	componentDidMount() {
		const { id } = this.props.match.params
		fetch(`/API/spots/${id}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ spot: data })
			})
	}

	renderSpotId = () => {
		// return this.state.spot._id ? this.state.spot._id : null
		console.log(this.state)
	}

	render() {
		return <p>{this.renderSpotId()}</p>
	}
}

// const mapStateToProps = state => ({
// 	state
// })

// export default connect(mapStateToProps)(SpotPage)
export default SpotPage
