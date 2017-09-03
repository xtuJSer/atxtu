import React, { Component } from 'react'
import { withRouter, Link } from 'react-router'

import './style.styl'

class Room extends Component {
  componentDidMount () {
    console.log(this.props.router)
  }

  render () {
    return (
      <nav className="page-nav">
        <div className="container">
          <span className="link-btn" onClick={ this.goBack.bind(this) }>返回</span>
          <h2 className="title">{ this.props.location.state ? this.props.location.state.name : '设置' }</h2>
          { this.props.location.pathname === '/setting' ? '' : <Link to="/setting" className="link-btn">设置</Link> }
        </div>
      </nav>
    )
  }

  goBack () {
    this.props.router.goBack()
  }
}

export default withRouter(Room)
