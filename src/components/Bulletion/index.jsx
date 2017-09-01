import React, { Component } from 'react'

class Bulletion extends Component {
  render () {
    return (
      <article>
        <ul>
          {
            this.props.content.map((el, i) => (
              <li key={i}>
                <p>{el}</p>
              </li>
            ))
          }
        </ul>
      </article>
    )
  }
}

export default Bulletion
