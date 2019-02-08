import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import 'semantic-ui-css/semantic.min.css'

import App from './containers/App'
import * as serviceWorker from './serviceWorker'
require('dotenv').config()

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.register()
