import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as roomActions from '@/actions/room'

class Room extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'Room'
    }
  }

  render () {
    console.log(this.props.room)
    return (
      <section className="room">
        <h2>{this.state.page}</h2>
      </section>
    )
  }
}

export default connect(
  state => ({ room: state.room }),
  dispatch => ({ roomActions: bindActionCreators(roomActions, dispatch) })
)(Room)
