import React, { Component } from 'react'

export default class Counter extends Component {
  render () {
    var { value, onIncrement, onDecrement } = this.props.children

    return (
      <div style={{ fontSize: 20 }}>
        <h2 style={{ padding: 15 }}>{value}</h2>
        <p>
          <button style={{ padding: 10, marginRight: 5 }} onClick={onDecrement}>-</button>
          <button style={{ padding: 10 }} onClick={onIncrement}>+</button>
        </p>
      </div>
    )
  }
}
