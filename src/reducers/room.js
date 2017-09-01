import * as actionTypes from '../constants/room'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ROOM_UPDATE:
      return action.data
    default:
      return state
  }
}
