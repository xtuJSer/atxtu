import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Bulletion from '@/components/Bulletion'
import HomeHeader from '@/components/HomeHeader'

import * as roomActions from '@/actions/room'

import './style.styl'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'atXTU',
      // TODO: 公告：[]，将在主页阶段加载
      content: [
        '内容 0',
        '内容 1',
        '内容 2',
        '内容 3',
        '内容 4'
      ]
    }
  }

  render () {
    return (
      <section className="home">
        <HomeHeader title={this.state.title} />
        <Bulletion content={this.state.content} />
      </section>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({ roomActions: bindActionCreators(roomActions, dispatch) })
)(Home)
