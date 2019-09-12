const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

const handler = () => {
  console.log('event 1 foo emitted')
}

// объявляем событие 1
emitter.on('foo', handler)

// удаляем обработчик
emitter.removeListener('foo', handler)

// эмитируем событие
emitter.emit('foo') // событие не будет обработано
