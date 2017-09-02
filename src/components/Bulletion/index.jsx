import React, { Component } from 'react'

class Bulletion extends Component {
  render () {
    return (
      <article>
          {
            this.props.content.map((el, i) => (
              <div key={i}>
                <p>{el}</p>
              </div>
            ))
          }
      </article>
    )
  }
}

export default Bulletion
