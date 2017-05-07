
module.exports = data => {
  // 遍历每一个时段
  data.map(time => {
    time.map(build => {
      console.log(build.name)
    })
  })
  return data
}
