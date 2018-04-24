export default function (state, emitter) {
  state.counter = 0

  emitter.on('counter:increment', () => {
    state.counter++
    emitter.emit('render')
  })

  emitter.on('counter:decrement', () => {
    state.counter++
    emitter.emit('render')
  })
}
