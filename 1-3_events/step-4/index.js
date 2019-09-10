const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

// у эмиттера есть функция, которая возвращает все
// обработчики, которые навешаны на события
emitter.on('foo', () => {})
emitter.on('foo', () => {})

console.log(emitter.listeners('foo')) // выдаст [[Function], [Function]]
