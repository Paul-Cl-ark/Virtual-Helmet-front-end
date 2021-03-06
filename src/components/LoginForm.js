import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from '../actions'
import TextLogo from '../components/TextLogo'

import { Button, Input, Form, Header, Icon, Grid, Container } from 'semantic-ui-react'

const buttonStyle = {
	maxWidth: '300px',
	width: '80vh',
	margin: '0 auto'
}

class LoginForm extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (event, { name, value }) => this.setState({ [name]: value })

	handleSubmit = event => {
		event.preventDefault()
		this.props.authenticateUser(this.state)
	}

	render() {
		const { email, password } = this.state

		return (
			<Fragment>
				<TextLogo />
				<Container>
					<Header style={{ borderBottom: 'solid green 3px' }} as="h2">
						<Icon name="sign in" />
						<Header.Content>Log In</Header.Content>
					</Header>
					<Form onSubmit={this.handleSubmit}>
						<Form.Field required>
							<label>Email</label>
							<Input
								fluid
								icon="at"
								iconPosition="left"
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
								icon="unlock"
								iconPosition="left"
								type="password"
								placeholder="Password"
								name="password"
								value={password}
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Grid>
							<Grid.Column textAlign="center">
								<Button primary size="large" style={buttonStyle} type="submit">
									Log In
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
	{ authenticateUser }
)(LoginForm)
