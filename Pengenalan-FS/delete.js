const fs = require('fs')

//Fungsi khusus untuk mengecek apakah file yang akan dihapus eksis
/*fs.stat('myText2.txt', (err, stats) => {
    if(err) {
        return console.log(err)
    }
    console.log(stats)
})*/

//Bedanya dengan penanganan error di fungsi unlink() yaitu
//Penanganan error di unlink() bersifat general
fs.unlink('myText2.txt', (err) => {
    if(err) {
        return console.log('File tidak ada')//console.error(err)
    }
    console.log('Sukses!')
})