const EventEmitter = require('events').EventEmitter
const events = new EventEmitter()

const handler = () => {
  console.log('event 1 foo emitted')
}

// объявляем событие 1
events.on('foo', handler)

// удаляем обработчик
events.removeListener('foo', handler)

// эмитируем событие
events.emit('foo') // событие не будет обработано
