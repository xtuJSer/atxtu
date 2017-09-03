import React from 'react'

import 'loaders.css/loaders.min.css'
import './style.styl'

export default ({ isLoaded }) => {
  return isLoaded
    ? ''
    : (
      <div className="loading-wrap">
        <div className="loading line-scale">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
}
