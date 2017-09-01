import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import App from './containers'
import initStore from './store'
import RouteMap from './router'

import registerServiceWorker from './registerServiceWorker'

const store = initStore()

render(
  <Provider store={store}>
    <RouteMap history={hashHistory} />
  </Provider>,
  document.querySelector('#root')
)

registerServiceWorker()
