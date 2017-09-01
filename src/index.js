import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import 'normalize.css'
import './static/css/app.styl'

import initStore from './store'
import RouteMap from './router'

import registerServiceWorker from './registerServiceWorker'

const store = initStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <RouteMap history={history} />
  </Provider>,
  document.querySelector('#root')
)

registerServiceWorker()
