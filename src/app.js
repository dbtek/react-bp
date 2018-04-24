import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withState, addStore } from 'react-sse'
import Counter from './components/Counter'
// init stores
import './stores'

class App extends Component {
  render () {
    var { state, emit } = this.props
    var counterOpts = {
      value: state.counter,
      onIncrement: () => emit('counter:increment'),
      onDecrement: () => emit('counter:decrement')
    }

    return (
      <main style={{ textAlign: 'center' }}>
        <h1>Welcome to React BP</h1>
        <Counter>{ counterOpts }</Counter>
      </main>
    )
  }
}

var StatefulApp = withState(App)
ReactDOM.render(<StatefulApp />, document.querySelector('#app'))
