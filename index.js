const path = require('path')
const fs = require('fs')
const media = fs.readFileSync('./media.txt')
const paths = media.toString().trim().split('\n')
const exiftool = require('node-exiftool')
const ep = new exiftool.ExiftoolProcess()

ep.open()
  .then((pid) => console.log('Started exiftool process %s', pid))
  .then(() => Promise.all(paths.map(path =>  ep.writeMetadata(path, {
    all: '', // remove existing tags
    comment: 'Exiftool rules!',
    'Keywords+': ['keywordA', 'keywordB'],
  }, ['overwrite_original'])))
    .then(console.log, console.error)
    .then(() => ep.close())
    .then(() => console.log('Closed exiftool'))
    .catch(console.error))

