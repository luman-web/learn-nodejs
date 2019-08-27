const fs = require('fs')

/**
 * Добавить файл
 * @param {string} path - путь к файлу
 */
module.exports.create = function (path) {
  fs.writeFile(path, '', 'utf-8', () => {
    console.log('file have been created')
  })
}

/**
 * Удалить файл
 * @param {string} path - путь к файлу
 */
module.exports.delete = function (path) {
  fs.unlink(path, () => {
    console.log('file have been deleted')
  })
}

/**
 * Записать в файл
 * @param {string} path - путь к файлу
 * @param {string} msg - содержание файла
 */
module.exports.edit = function (path, msg) {
  fs.writeFile(path, msg, 'utf-8', () => {
    console.log('file have been written')
  })
}
