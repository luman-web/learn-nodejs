const fileManager = require('./file-manager')

const command = process.argv[2]
const fileName = process.argv[3]
const msg = process.argv[4]

switch (command) {
  case 'create': fileManager.create(__dirname + '/files/' + fileName)
    break
  case 'delete': fileManager.delete(__dirname + '/files/' + fileName)
    break
  case 'edit': fileManager.edit(__dirname + '/files/' + fileName, msg)
    break
}
