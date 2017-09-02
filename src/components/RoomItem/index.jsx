import React, { Component } from 'react'

import './style.styl'

class RoomItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      init: false,
      show: false,
      sift: Array.apply(null, new Array(5)).map(() => false),
      time: Array.apply(null, new Array(5)),
      backup: JSON.parse(JSON.stringify(this.props.data))
    }
  }

  clickHandle (e) {
    const { num } = e.target.dataset
    this.siftHandle(+num)
  }

  siftHandle (num) {
    let sift = [...this.state.sift]

    if (num === -1) {
      const hasFalse = sift.indexOf(false) > -1

      sift = hasFalse
        ? sift.map(() => true)
        : sift.map(() => false)
    } else {
      sift[num] = !sift[num]
    }

    // this.setState({ sift })
    this.setState({ sift }, this.updateRoom)
  }

  updateRoom () {
    const proxy = JSON.parse(JSON.stringify(this.props.data))
    const { rooms } = proxy
    const { sift } = this.state

    sift.forEach((item, i) => {
      if (item === false) { return }
      for (let j = 0, len = rooms.length; j < len; j++) {
        let el = rooms[j]
        if (el.time[i] === '满') {
          rooms.splice(j--, 1)
          len--
        }
      }
    })

    this.setState({ backup: proxy })
  }

  toggleShow () {
    this.setState({ show: !this.state.show })
  }

  componentDidMount () {
    this.setState({ init: true })
  }

  render () {
    const { name, rooms } = this.state.backup
    const { sift, time, init } = this.state

    return (
      <li className="room-item card" style={{ display: init ? 'block' : 'none' }}>
        <h3 className="title" onClick={ this.toggleShow.bind(this) }>{ name }</h3>

        <div className={ `content ${ this.state.show ? 'active' : '' }` }>
          <table>
            <thead>
              <tr>
                <th id="title" data-num="-1" onClick={ this.clickHandle.bind(this) }>
                  { sift.indexOf(true) > -1
                    ? (sift.indexOf(false) > -1 ? '全选' : '取消')
                    : '筛选' }
                </th>
                { time.map((item, i) => (
                  <th
                    key={ i }
                    data-num={ i }
                    className={ sift[i] ? 'active' : '' }
                    onClick={ this.clickHandle.bind(this) }
                  >
                    { `${i * 2 + 1}-${i * 2 + 2}` }
                  </th>
                )) }
              </tr>
            </thead>

            <tbody>
              {
                rooms.map((item, i) => (
                  <tr key={ i }>
                    <td key="0">{ item.room }</td>
                    { item.time.map((el, j) => (
                      <td key={ j + 1 } className={ el === '满' ? 'busy' : 'free' }>{ el }</td>
                    )) }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </li>
    )
  }
}

export default RoomItem
