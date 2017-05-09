const powerList = [
  '逸夫楼',
  '兴教楼',
  '一教楼',
  '经管楼',
  '南山阶梯',
  '北山阶梯'
]

module.exports = data => {
  powerList.forEach((name, i) => {
    data.every((el, j) => {
      if (el.name === name) {
        [data[j], data[i]] = [data[i], data[j]]
        return false
      }
      return true
    })
  })
  return data
}
