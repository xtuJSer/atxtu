import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PageNav from '@/components/PageNav'

import * as roomActions from '@/actions/room'

class Room extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '设置',
    }
  }

  componentDidMount () {
    // console.log(this.props.location.state.from)
  }

  render () {
    return (
      <section className="room page">
        <PageNav
          title={ this.state.title }
          from={ this.props.location.state && this.props.location.state.from }
        />
      </section>
    )
  }
}

export default connect(
  state => ({ room: state.room }),
  dispatch => ({ roomActions: bindActionCreators(roomActions, dispatch) })
)(Room)
