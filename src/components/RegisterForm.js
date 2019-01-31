import React, { Component, Fragment } from 'react'
import { Button, Input, Form, Header, Icon } from 'semantic-ui-react'

class RegisterForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	}

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = e => {
		e.preventDefault()
		this.setState({ email: '', password: '' })
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
					<Form.Field>
						<label>Confirm Password</label>
						<Input
							fluid
							required
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

export default RegisterForm
