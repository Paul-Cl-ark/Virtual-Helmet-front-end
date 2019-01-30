import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import { simpleAction } from '../actions/simpleAction'
import Logo from '../components/Logo'
import Map from '../components/Map'

class App extends Component {
	simpleAction = event => {
		this.props.simpleAction()
	}

	render() {
		return (
			<Router>
				<Fragment>
					<Route exact path="/" component={Logo} />
					<Route exact path="/home" component={Map} />
				</Fragment>
			</Router>
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
