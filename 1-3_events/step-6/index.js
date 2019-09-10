const EventEmitter = require('events').EventEmitter

// создание собственного обработчика событий
class Foo extends EventEmitter {
  connect () {
    this.emit('connected')
  }
}

const foo = new Foo()

foo.on('connected', () => {
  console.log('foo connected')
})

foo.connect()
