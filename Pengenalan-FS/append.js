const fs = require('fs')

fs.appendFile('myText.txt', 'Hello world', () => {
    console.log('Berhasil menulis file.')
})