import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import { simpleAction } from '../actions/simpleAction'

import LandingPage from './LandingPage'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import ProfilePage from './ProfilePage'

class App extends Component {
	simpleAction = event => {
		this.props.simpleAction()
	}

	render() {
		return (
			<Router>
				<Fragment>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/login" component={LoginForm} />
					<Route exact path="/register" component={RegisterForm} />
					<Route exact path="/profile" component={ProfilePage} />
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
