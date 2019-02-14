import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'
import TextLogo from '../components/TextLogo'
import { Button, Input, Form, Header, Icon, Container, Grid, Label } from 'semantic-ui-react'
import { toast } from 'react-toastify'

const buttonStyle = {
	maxWidth: '300px',
	width: '80vh',
	margin: '0 auto'
}

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
		if (this.state.password === this.state.passwordConfirmation) {
			this.props.registerUser({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password
			})
		} else {
			toast.warn('Passwords do not match!')
		}
	}

	render() {
		const { firstName, lastName, email, password, passwordConfirmation } = this.state

		return (
			<Fragment>
				<TextLogo />
				<Container>
					<Header as="h2">
						<Icon name="sign in" />
						<Header.Content>Sign Up</Header.Content>
					</Header>
					<Form unstackable onSubmit={this.handleSubmit}>
						<Form.Group widths={2}>
							<Form.Field required>
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
							<Form.Field required>
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
						</Form.Group>
						<Form.Field required>
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
						<Form.Field required>
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
						<Form.Field required>
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
						<Grid>
							<Grid.Column textAlign="center">
								<Button size="large" primary style={buttonStyle} type="submit">
									Sign Up
								</Button>
							</Grid.Column>
						</Grid>
					</Form>
				</Container>
			</Fragment>
		)
	}
}

export default connect(
	null,
	{ registerUser }
)(RegisterForm)
