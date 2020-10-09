const fs = require('fs')

fs.rename('myText.txt', 'myText2.txt', (err) => {
    if(err) {
        return console.error(err)
    }
    console.log('Success!')
})