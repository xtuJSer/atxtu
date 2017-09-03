import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PageNav from '@/components/PageNav'
import RoomList from './sub/RoomList'

import * as roomActions from '@/actions/room'

class Room extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '空闲教室',
      data: []
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    // TODO: 数组：[], 用于更新空闲教室数据
    const data = require('./mock.json')
    this.setState({ data })
    // console.log(this.state.data) // [] NOTE: setState 为异步
  }

  render () {
    return (
      <section className="room page">
        <PageNav title={ this.state.title } />
        {
          this.state.data.length
            ? <RoomList data={ this.state.data } />
            : '加载中..'
        }
      </section>
    )
  }
}

export default connect(
  state => ({ room: state.room }),
  dispatch => ({ roomActions: bindActionCreators(roomActions, dispatch) })
)(Room)
