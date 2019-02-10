import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Image } from 'semantic-ui-react'

class ProfilePage extends Component {
	render() {
		const { firstName, lastName, date } = this.props.user
		return (
			<Container>
				<Header as="h2">
					<Image circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />{' '}
					{firstName}
				</Header>
				<p>Member since: {date}</p>
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	user: state.users.user
})

export default connect(mapStateToProps)(ProfilePage)
