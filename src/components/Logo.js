import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

const Logo = props => (
	<Image src={`/images/${props.colour}.png`} size="mini" alt="Virtual Helmet Logo" />
)

const mapStateToProps = state => ({
	colour: state.app.theme
})

export default connect(mapStateToProps)(Logo)
