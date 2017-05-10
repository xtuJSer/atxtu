import axios from 'axios'
const { sortData, formatData } = require('../filter')

export const fetchData = (url, day, byName) => {
  return axios({
    url,
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
