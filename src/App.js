import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { simpleAction } from './actions/simpleAction'

class App extends Component {
	simpleAction = event => {
		this.props.simpleAction()
	}

	render() {
		return (
			<Fragment>
				<pre>{JSON.stringify(this.props)}</pre>
				<button onClick={this.simpleAction}>Test redux action</button>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
