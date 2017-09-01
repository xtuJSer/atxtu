import * as actionTypes from '../constants/room'

export const update = data => ({
  type: actionTypes.ROOM_UPDATE,
  data
})
