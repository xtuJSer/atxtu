import React, { Component } from 'react'
import { withRouter, Link } from 'react-router'

import './style.styl'

class HomeHeader extends Component {
  render () {
    return (
      <header>
        <h2 className="title">{this.props.title}</h2>
        {/* TODO: 在 state 中传参，传递链接名称 */}
        <div className="link-wrap">
          <span className="link-btn" onClick={ this.goto('/room').bind(this) }>空闲教室</span>
          <span className="link-btn" onClick={ this.goto('/info').bind(this) }>今日校园</span>
        </div>
      </header>
    )
  }

  goto (pathname) {
    return function (e) {
      this.props.router.push({
        pathname,
        state: {
          name: e.target.innerText
        }
      })
    }
  }
}

export default withRouter(HomeHeader)
