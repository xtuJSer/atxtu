import React, { Component } from 'react'
import { withRouter } from 'react-router'

import './style.styl'

class Room extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <nav className="page-nav">
        <div className="container">
          <span className="link-btn" onClick={ this.goBack.bind(this) }>返回</span>
          <h2 className="title">{ this.props.title }</h2>
          { this.props.location.pathname === '/setting'
            ? ''
            : <span className="link-btn link-setting" onClick={ this.goSetting.bind(this) }>设置</span> }
        </div>
      </nav>
    )
  }

  goBack () {
    const { location: { pathname }, router } = this.props

    if (pathname !== '/setting') { router.push('/') }
    else {
      const { from: _from } = this.props
      console.log(_from)
      _from ? router.push(_from) : router.replace('/')
    }
  }

  goSetting () {
    this.props.router.push({
      pathname: '/setting',
      state: {
        from: this.props.location.pathname
      }
    })
  }
}

export default withRouter(Room)
