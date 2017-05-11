import axios from 'axios'
import { classroomURL, messageURL } from '../config'
const { sortData, formatData } = require('../filter')

export const fetchData = (day, byName) => {
  return axios({
    url: classroomURL,
    method: 'post',
    data: {
      day,
      byName
    },
    withCredentials: true
  })
  .then(res => {
    if (byName) {
      return sortData(res.data)
    } else {
      return formatData(res.data)
    }
  })
  .catch(err => err)
}

export const fetchMessage = (itemLength) => {
  return axios({
    url: messageURL,
    method: 'post',
    data: { itemLength },
    withCredentials: true
  })
  .then(res => res.data.message)
  .catch(err => { throw new Error(err) })
}
