const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const data = fs.createReadStream(__dirname + '/data.txt', { encoding: 'utf8' })

  data.on('data', (chunk) => {
    console.log('check of data: <<<<<<<<<<<<<<<<<<<<<<<<<<')
    console.log(chunk)
  })
})

server.listen(8000)
