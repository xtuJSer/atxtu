import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import Room from '../containers/Room'
import Info from '../containers/Info'
import NotFound from '../containers/NotFound'

class RouteMap extends Component {
  render () {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/room' component={Room}/>
          <Route path='/info' component={Info}>
            {/*
                <Route path='/User' component={User}/>
                <Route path='/search/:category(/:keyword)' component={Search}/>
                <Route path='/detail/:id' component={Detail}/>

                <Route path="/university" component={University}></Route>
                <Route path="/college" component={College}></Route>
            */}
          </Route>
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default RouteMap
