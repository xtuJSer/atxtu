import React, { Component } from 'react';
import 'normalize.css'
import '../static/css/common.styl'

class App extends Component {
  render () {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

export default App
