import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { Button, Input, Form, Header, Icon } from 'semantic-ui-react'

class LoginForm extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = e => {
		e.preventDefault()
		this.props.authenticateUser(this.state)
	}

	render() {
		const { email, password } = this.state

		return (
			<Fragment>
				<Header as="h2">
					<Icon name="sign in" />
					<Header.Content>Log In</Header.Content>
				</Header>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Email</label>
						<Input
							fluid
							required
							placeholder="Email"
							name="email"
							value={email}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<Input
							fluid
							required
							placeholder="Password"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Button type="submit">Log In</Button>
				</Form>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

export default connect(
	mapStateToProps,
	actions
)(LoginForm)
