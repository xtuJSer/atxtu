const attachBuild = (state, build, timeIdx) => {
  let { name, room } = build
  let time = 2 * timeIdx + 1 + '-' + parseInt(2 * timeIdx + 2)

  !state[name] && (state[name] = {})
  state[name][time] = room
  return state
}

module.exports = data => {
  let state = {}

  // 遍历每一个时段
  data.map((time, idx) => {
    time.map(build => {
      state = attachBuild(state, build, idx)
    })
  })
  return state
}
