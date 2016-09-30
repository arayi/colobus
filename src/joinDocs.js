
// When run from the 

const fs = require('fs')
let sourceDir = 'src/docs/'
let target = 'docs.md'



const processDocs = (sourceDir, target) => {
  fs.closeSync(fs.openSync(target, 'w'))

  let fileNames = fs.readdirSync(sourceDir)
  let fileContents = getFileContents(fileNames, sourceDir, target)
}

const getFileContents = (fileNames, sourceDir, target) => {
  fileNames.forEach(fileName => {
    if (fileName != 'blankDoc') {
      let functionName = fileName.replace('.md', '')
      let sourcePath = (sourceDir + fileName)

      fs.readFile(sourcePath, 'utf8', function (err, data) {
        if (err) {
          throw err
        } else {
          fs.appendFileSync(target, data + '\n\n', 'utf8', function (err) {
            if (err) {
              throw err
            }
          })
        }
      })
    }
  })
}

processDocs(sourceDir, target)
