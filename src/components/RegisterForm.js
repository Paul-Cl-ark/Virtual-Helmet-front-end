import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'

import { Button, Input, Form, Header, Icon } from 'semantic-ui-react'

class RegisterForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	}

	handleChange = (event, { name, value }) => this.setState({ [name]: value })

	handleSubmit = event => {
		event.preventDefault()
		this.props.registerUser({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		})
	}

	render() {
		const { firstName, lastName, email, password, passwordConfirmation } = this.state

		return (
			<Fragment>
				<Header as="h2">
					<Icon name="sign in" />
					<Header.Content>Register</Header.Content>
				</Header>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>First Name</label>
						<Input
							fluid
							required
							placeholder="First Name"
							name="firstName"
							value={firstName}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Last Name</label>
						<Input
							fluid
							required
							placeholder="Last Name"
							name="lastName"
							value={lastName}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Email</label>
						<Input
							fluid
							required
							type="email"
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
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Confirm Password</label>
						<Input
							fluid
							required
							type="password"
							placeholder="Confirm Password"
							name="passwordConfirmation"
							value={passwordConfirmation}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Button type="submit">Register</Button>
				</Form>
			</Fragment>
		)
	}
}

export default connect(
	null,
	{ registerUser }
)(RegisterForm)
