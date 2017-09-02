import React, { Component } from 'react'

import './style.styl'

class RoomItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sift: [false, false, false, false, false],
      time: Array.apply(null, new Array(5))
    }
  }

  render () {
    const { name, rooms } = this.props.data
    const { sift, time } = this.state

    return (
      <li className="room-item card">
        <h3>{ name }</h3>

        <table>
          <thead>
            <tr>
              <th id="title">
                { sift.indexOf(true) > -1
                  ? (sift.indexOf(false) > -1 ? '全选' : '取消')
                  : '筛选' }
              </th>
              { time.map((item, i) => <th key={ i }>{ i }</th>) }
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
      </li>
    )
  }
}

export default RoomItem
