import React from 'react'
import { Link } from 'react-router'

import './style.styl'

export default () => (
  <header>
    <Link to="room">空闲教室</Link>
    <Link to="info">湘大资讯</Link>
  </header>
)
