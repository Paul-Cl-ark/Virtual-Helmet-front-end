import React, { Component, Fragment } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import * as actions from '../actions'
import history from '../history'

import LandingPage from './LandingPage'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import ProfilePage from './ProfilePage'
import SettingsPage from './SettingsPage'
import StatsPage from './StatsPage'
import ProfileMenu from '../components/ProfileMenu'

class App extends Component {
	renderMenu = () => (this.props.appActionsReducer.renderMenu ? <ProfileMenu /> : null)
	render() {
		return (
			<Router history={history}>
				<Fragment>
					<NavBar toggleMenu={this.props.toggleMenu} />
					{this.renderMenu()}
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/login" component={LoginForm} />
					<Route exact path="/register" component={RegisterForm} />
					<Route exact path="/profile" component={ProfilePage} />
					<Route exact path="/settings" component={SettingsPage} />
					<Route exact path="/stats" component={StatsPage} />
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
