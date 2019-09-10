// некоторые классы внутри nodejs наследуют от EventEmitter.
// глобальный объект process также является наследником от EventEmitter

process.on('uncaughtException', (err) => {
  console.log('Caught exception: ', err)
  console.log('Stack: ', err.stack)
  process.exit(1)
})

process.on('exit', (code) => {
  console.log('Exiting with  code: ', code)
})

unexsitingFunctionCall()
