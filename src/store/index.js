import { createStore } from 'redux'
import rootReducer from '../reducers'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
}
