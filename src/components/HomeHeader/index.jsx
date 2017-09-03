import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.styl'

class HomeHeader extends Component {
  render () {
    return (
      <header>
        <h2 className="title">{ this.props.title }</h2>
        <div className="link-wrap">
          <Link to="/room" className="link-btn">空闲教室</Link>
          <Link to="/info" className="link-btn">今日校园</Link>
        </div>
      </header>
    )
  }
}

export default HomeHeader
