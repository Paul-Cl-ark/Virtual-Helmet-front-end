import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './store'
import 'semantic-ui-css/semantic.min.css'
import 'react-notifications/lib/notifications.css'

import App from './containers/App'
import * as serviceWorker from './serviceWorker'
require('dotenv').config()

ReactDOM.render(
	<Provider store={store().store}>
		<PersistGate loading={null} persistor={store().persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.register()
