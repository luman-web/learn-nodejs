const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

// объявляем событие 1
emitter.on('foo', () => {
  console.log('event 1 foo emitted')
})

// объявляем событие 2
emitter.on('foo', () => {
  console.log('event 2 foo emitted')
})

// эмитируем событие
emitter.emit('foo')
