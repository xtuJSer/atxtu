import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PageNav from '@/components/PageNav'

import * as infoActions from '@/actions/info'

class info extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '今日校园'
    }
  }

  render () {
    console.log(this.props.info)
    return (
      <section className="info page">
        <PageNav
          title={ this.state.title }
        />
      </section>
    )
  }
}

export default connect(
  state => ({ info: state.info }),
  dispatch => ({ infoActions: bindActionCreators(infoActions, dispatch) })
)(info)
