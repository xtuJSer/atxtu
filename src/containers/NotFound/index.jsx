import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as roomActions from '@/actions/room'

class NotFound extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: '404'
    }
  }

  render () {
    console.log(this.props.room)
    return <h2>{this.state.page}</h2>
  }
}

export default connect(
  state => ({ room: state.room }),
  dispatch => ({ roomActions: bindActionCreators(roomActions, dispatch) })
)(NotFound)
