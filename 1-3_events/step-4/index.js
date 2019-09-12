const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

// у эмиттера есть функция, которая возвращает все
// обработчики, которые навешаны на события
emitter.on('foo', () => { console.log('handler 1') })
emitter.on('foo', () => { console.log('handler 2') })

// получаем список обработчиков
const listeners = emitter.listeners('foo') // выдаст [[Function], [Function]]

// удаляем обарботчики для события foo
for (let listener of listeners) {
  emitter.removeListener('foo', listener)
}

emitter.emit('foo')
