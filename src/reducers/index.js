import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import room from './room'

export default combineReducers({
  room,
  routing: routerReducer
})
