import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Bulletion from '@/components/Bulletion'
import HomeHeader from '@/components/HomeHeader'

import * as roomActions from '@/actions/room'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'Home',
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
        <h2>{this.state.page}</h2>

        <HomeHeader />
        <Bulletion
          content={this.state.content}
        />
      </section>
    )
  }
}

export default connect(
  () => ({}),
  dispatch => ({ roomActions: bindActionCreators(roomActions, dispatch) })
)(Home)
