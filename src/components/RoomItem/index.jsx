import React, { Component } from 'react'

class RoomItem extends Component {
  render () {
    const build = this.props.data

    return (
      <li className="room-item">
        <h3>{ build.name }</h3>
        <ul>{
          build.rooms.map((item, i) => (
            <li key={ i }>
              <h4>{ item.room }</h4>
            </li>
          ))
        }</ul>
      </li>
    )
  }
}

export default RoomItem
