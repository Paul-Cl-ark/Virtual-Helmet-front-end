import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goToProfile, goToHome, goToSettings, goToSpots, logOutUser, closeMenu } from '../actions'
import { Icon, Menu } from 'semantic-ui-react'

const menuStyle = {
	position: 'absolute',
	top: '90px',
	right: '3px',
	zIndex: 1
}

class ProfileMenu extends Component {
	state = {}
	handleItemClick = (event, { name }) => {
		switch (name) {
			case 'profile':
				this.props.closeMenu()
				this.props.goToProfile()
				break
			case 'home':
				this.props.closeMenu()
				this.props.goToHome()
				break
			case 'settings':
				this.props.closeMenu()
				this.props.goToSettings()
				break
			case 'spots':
				this.props.closeMenu()
				this.props.goToSpots()
				break
			case 'logOut':
				this.props.logOutUser()
				break
			default:
				break
		}
		return this.setState({ activeItem: name })
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu style={menuStyle} compact icon="labeled" vertical>
				<Menu.Item name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick}>
					<Icon color={this.props.colour} name="user" />
					Profile
				</Menu.Item>

				<Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
					<Icon color={this.props.colour} name="map" />
					Map
				</Menu.Item>

				<Menu.Item
					name="settings"
					active={activeItem === 'settings'}
					onClick={this.handleItemClick}>
					<Icon color={this.props.colour} name="settings" />
					Settings
				</Menu.Item>

				<Menu.Item name="spots" active={activeItem === 'spots'} onClick={this.handleItemClick}>
					<Icon color={this.props.colour} name="map marker alternate" />
					Spots
				</Menu.Item>

				<Menu.Item name="logOut" active={activeItem === 'logOut'} onClick={this.handleItemClick}>
					<Icon color={this.props.colour} name="log out" />
					Log Out
				</Menu.Item>
			</Menu>
		)
	}
}

const mapDispatchToProps = state => ({
	colour: state.app.theme
})

export default connect(
	mapDispatchToProps,
	{ goToProfile, goToHome, goToSettings, goToSpots, logOutUser, closeMenu }
)(ProfileMenu)
