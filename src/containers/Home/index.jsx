import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as roomActions from '@/actions/room'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'Home'
    }
  }

  render () {
    console.log(this.props.room)
    return (
      <section className="home">
        <h2>{this.state.page}</h2>
      </section>
    )
  }
}

export default connect(
  state => ({ room: state.room }),
  dispatch => ({ roomActions: bindActionCreators(roomActions, dispatch) })
)(Home)
