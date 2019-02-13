import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../history'

import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ProfilePage from './ProfilePage'
import SettingsPage from './SettingsPage'
import UserSpotsPage from './UserSpotsPage'
import ProfileMenu from '../components/ProfileMenu'
import NavBar from '../components/NavBar'
import SpotPage from './SpotPage'
import NotfoundPage from './NotFoundPage'
import { ToastContainer } from 'react-toastify'

class App extends Component {
	renderMenu = () => (this.props.renderMenu ? <ProfileMenu /> : null)
	render() {
		return (
			<Router history={history}>
				<Fragment>
					<ToastContainer autoClose={2000} />
					<NavBar />
					{this.renderMenu()}
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/register" component={RegisterPage} />
						<Route exact path="/profile" component={ProfilePage} />
						<Route exact path="/settings" component={SettingsPage} />
						<Route exact path="/spots" component={UserSpotsPage} />
						<Route path="/viewspot/:id" component={SpotPage} />
						<Route component={NotfoundPage} />
					</Switch>
				</Fragment>
			</Router>
		)
	}
}

const mapStateToProps = state => ({
	renderMenu: state.app.renderMenu
})

export default connect(mapStateToProps)(App)
