import React, { Component, Fragment } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import history from '../history'

import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ProfilePage from './ProfilePage'
import SettingsPage from './SettingsPage'
import StatsPage from './StatsPage'
import ProfileMenu from '../components/ProfileMenu'

class App extends Component {
	renderMenu = () => (this.props.renderMenu ? <ProfileMenu /> : null)
	render() {
		return (
			<Router history={history}>
				<Fragment>
					{!!localStorage.getItem('user') ? <NavBar /> : null}
					{this.renderMenu()}
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/profile" component={ProfilePage} />
					<Route exact path="/settings" component={SettingsPage} />
					<Route exact path="/stats" component={StatsPage} />
				</Fragment>
			</Router>
		)
	}
}

const mapStateToProps = state => ({
	renderMenu: state.appActions.renderMenu
})

export default connect(mapStateToProps)(App)
