

// Main file that exports all functions

const fs = require('fs')

const getFiles = (dir) => {
  let output = {}
  var files = fs.readdirSync(dir)
  files.forEach(fileName => {
    let functionName = fileName.replace('.js', '')
    let exports = require('./functions/' + functionName)
    output[functionName] = exports.__esModule ? exports.default : exports
  })
  return output
}

export default getFiles(__dirname + '/functions')