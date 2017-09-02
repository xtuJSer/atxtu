import React, { Component } from 'react'

import RoomItem from '@/components/RoomItem'
import '../style.styl'

class RoomList extends Component {
  render () {
    return (
      <ul className="room-list container">
        { this.props.data.map((item, i) => (
          <RoomItem key={ i } data={ item } />
        )) }
      </ul>
    )
  }
}

export default RoomList
