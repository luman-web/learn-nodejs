const fs = require('fs')

/**
 * Добавить файл
 * @param {string} path - путь к файлу
 */
module.exports.create = function (path) {
    fs.writeFile(path, '', 'utf-8', () => {
        console.log('Файл успешно создан')
    })
}

/**
 * Удалить файл
 * @param {string} path - путь к файлу
 */
module.exports.delete = function (path) {
    fs.unlink(path, () => {
        console.log('Файл успешно удален')
    })
}

/**
 * Записать в файл
 * @param {string} path - путь к файлу
 * @param {string} msg - содержание файла
 */
module.exports.edit = function (path, msg) {
    fs.writeFile(path, msg, 'utf-8', () => {
        console.log('Файл успешно отредактирован')
    })
}
