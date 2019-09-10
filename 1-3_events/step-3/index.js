const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

// объявляем событие, которое должно быть обработано
// множество раз
emitter.on('foo', () => {
  console.log('event 1')
})

// объявляем событие которое должно быть обработано
// только один раз
emitter.once('bar', () => {
  console.log('event 2')
})

emitter.emit('foo')
emitter.emit('foo')

emitter.emit('bar')
emitter.emit('bar')
