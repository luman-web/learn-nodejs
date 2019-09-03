const EventEmitter = require('events').EventEmitter
const events = new EventEmitter()

// объявляем событие 1
events.on('foo', () => {
  console.log('event 1 foo emitted')
})

// объявляем событие 2
events.on('foo', () => {
  console.log('event 2 foo emitted')
})

// эмитируем событие
events.emit('foo')
