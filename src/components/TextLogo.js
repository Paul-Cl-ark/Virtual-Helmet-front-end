import React from 'react'
import { Image } from 'semantic-ui-react'

const textLogoStyle = {
	margin: '20px auto 20px'
}

const TextLogo = props => (
	<Image
		src={'/images/green-text.png'}
		size="small"
		alt="Virtual Helmet Text Logo"
		style={textLogoStyle}
	/>
)

export default TextLogo
