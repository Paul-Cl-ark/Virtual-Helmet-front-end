import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

const textLogoStyle = {
	margin: '20px auto 20px'
}

const TextLogo = props => (
	<Image
		src={`/images/${props.colour}-text.png`}
		size="small"
		alt="Virtual Helmet Text Logo"
		style={textLogoStyle}
	/>
)

const mapStateToProps = state => ({
	colour: state.app.theme
})

export default connect(mapStateToProps)(TextLogo)
