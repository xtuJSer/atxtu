const powerList = [
  '逸夫楼',
  '兴教楼',
  '一教楼',
  '南山阶梯',
  '北山阶梯',
  '兴湘学院三教',
  '经管楼',
  '外语楼',
  '文科楼',
  '土木楼',
  '法学附',
  '工科楼阶梯',
  '四教区',
  '四教区图书馆'
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
