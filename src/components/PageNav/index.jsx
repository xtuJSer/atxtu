import React, { Component } from 'react'
import { withRouter, Link } from 'react-router'

import './style.styl'

class Room extends Component {
  render () {
    return (
      <nav className="page-nav">
        <div className="container">
          <Link to="/">返回</Link>
          <h2 className="title">{ this.props.location.pathname === '/room' ? '空闲教室' : '今日校园' }</h2>
          <Link to="/setting">设置</Link>
        </div>
      </nav>
    )
  }

  componentDidMount () {
  }
}

export default withRouter(Room)
