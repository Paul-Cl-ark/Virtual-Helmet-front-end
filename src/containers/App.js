import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import * as actions from '../actions'

import LandingPage from './LandingPage'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import ProfilePage from './ProfilePage'
import ProfileMenu from '../components/ProfileMenu'

class App extends Component {
	renderMenu = () => (this.props.appActionsReducer.menuIsOpen ? <ProfileMenu /> : null)
	render() {
		return (
			<Router>
				<Fragment>
					<NavBar openMenu={this.props.openMenu} />
					{this.renderMenu()}
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

export default connect(
	mapStateToProps,
	actions
)(App)
