import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Icon, Menu } from 'semantic-ui-react'

const menuStyle = {
	position: 'absolute',
	top: '80px',
	right: '3px',
	zIndex: 1
}

class ProfileMenu extends Component {
	state = {}
	handleItemClick = (event, { name }) => {
		switch (name) {
			case 'profile':
				this.props.goToProfile()
				break
			case 'settings':
				this.props.goToSettings()
				break
			case 'stats':
				this.props.goToStats()
				break
			case 'logOut':
				this.props.logOut()
				break
		}
		return this.setState({ activeItem: name })
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu style={menuStyle} compact icon="labeled" vertical>
				<Menu.Item name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick}>
					<Icon name="user outline" />
					Profile
				</Menu.Item>

				<Menu.Item
					name="settings"
					active={activeItem === 'settings'}
					onClick={this.handleItemClick}>
					<Icon name="settings" />
					Settings
				</Menu.Item>

				<Menu.Item name="stats" active={activeItem === 'stats'} onClick={this.handleItemClick}>
					<Icon name="line graph" />
					Stats
				</Menu.Item>

				<Menu.Item name="logOut" active={activeItem === 'logOut'} onClick={this.handleItemClick}>
					<Icon name="log out" />
					Log Out
				</Menu.Item>
			</Menu>
		)
	}
}

export default connect(
	null,
	actions
)(ProfileMenu)
