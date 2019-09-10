const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

// иногда нужно проследить, когда обработчики были добавлены или удалены
// для этих целей у эмиттера есть свои события:
// - newListener - когда обработчик добавлен
// - removeListener - когда обработчик удален

emitter.on('newListener', (eventName, listenerFunction) => {
  console.log(eventName, 'listener added', listenerFunction.name)
})

emitter.on('removeListener', (eventName, listenerFunction) => {
  console.log(eventName, 'listener removed', listenerFunction.name)
})

function a () {}
function b () {}

emitter.on('foo', a)
emitter.on('bar', b)

emitter.removeListener('bar', b)
