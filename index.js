const path = require('path');
const fs = require('fs');
const media = fs.readFileSync('./media.txt');
const paths = media.toString().trim().split("\n");
const exiftool = require('node-exiftool');
const ep = new exiftool.ExiftoolProcess();

paths.map(file => {
    ep.open()
        .then(() => ep.writeMetadata(file, {
            all: '', // remove existing tags
            comment: 'Exiftool rules!',
            'Keywords+': [ 'keywordA', 'keywordB' ],
        }, ['overwrite_original']))
        .then(console.log, console.error)
        .then(() => ep.close())
        .catch(console.error);
});

