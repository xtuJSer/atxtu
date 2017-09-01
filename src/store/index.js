import { createStore } from 'redux'
import rootReducer from '../reducers'

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
}
