import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.styl'

class HomeHeader extends Component {
  render () {
    return (
      <header>
        <h2>{this.props.title}</h2>
        <div>
          <Link to="room">空闲教室</Link>
          <Link to="info">湘大资讯</Link>
        </div>
      </header>
    )
  }
}

export default HomeHeader
