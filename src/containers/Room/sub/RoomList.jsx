import React, { Component } from 'react'

import RoomItem from '@/components/RoomItem'
// import Loading from '@/components/Loading'
import '../style.styl'

class RoomList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      isLoaded: false,
      timer: null
    }
  }

  render () {
    return (
      <ul className="room-list container">
        { this.state.data.map((item, i) => <RoomItem key={ i } data={ item } />) }
        {/* Loading(this.state) */}
      </ul>
    )
  }

  loadItem (count) {
    return () => {
      let { data: sData, data: { length: sLen } } = this.state
      let { data: pData, data: { length: pLen } } = this.props

      // console.log(sLen, pLen)
      if (sLen === pLen) {
        this.setState({ isLoaded: true })
        return
      }
      while (sLen + count > pLen) { count-- }

      this.setState(
        { data: [...sData, ...pData.slice(sLen, sLen + count)] },
        this.itemLoop(this.loadItem(3))
      )
    }
  }

  itemLoop (fn, time = 100) {
    if (this.isLoaded) { return }
    if (fn) {
      let timer = setTimeout(() => fn(this.itemLoop), time)
      this.setState({ timer })
    }
  }

  componentDidMount () {
    // this.props.data.length && this.loadItem(20)()
    this.props.data.length && this.itemLoop(this.loadItem(8))

    // window.addEventListener('scroll', this.throttle(this.loadItem(5), 500, 1000))
  }

  componentWillUnmount () {
    const { timer } = this.state
    clearTimeout(timer)
  }

  // throttle (fn, l = 100, r) {
  //   let pre = Date.now()
  //   let timer = null
  //   // let isFirst = true

  //   return () => {
  //     if (timer) { clearTimeout(timer) }
  //     let now = Date.now()

  //     if (now - pre > l) {
  //       pre = now
  //       fn()
  //     } else {
  //       r && (timer = setTimeout(() => fn(), r))
  //     }
  //   }
  // }
}

export default RoomList
