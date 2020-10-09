const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/about', function(req, res, next) {
    console.log(req.query)
    //res.send('Ini adalah halaman About')
    res.send({ success: true, keyword: req.query.keyword})
})

app.get('/txt-response', (req, res, next) => {
    res.send('Hello world!')
})

app.get('', function(req, res, next) {
    res.send('Ini adalah halaman Awal')
})

app.get('/product/:productId', (req, res, next) => {
    /*console.log(req.params)
    res.send('success')*/
    res.send({ success: true, productId: req.params.productId})
})

app.get('/category/:productCategory/product/:productId', (req, res, next) => {
    res.send(req.params)
})

app.get('/error', (req, res, next) => {
    next(new Error('contoh error'))
})

app.get('/multi-handler', (req, res, next) => {
    //Validasi request 
    if (req.query.keyword === 'satu') {
        return next()
    }
    return res.send('Keyword harus satu')

}, (req, res, next) => {
    res.send('Sukses')
})

app.get('/index', (req, res, next) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})

app.get('/pdf', (req, res, next) => {
    res.sendFile(__dirname + '/brosur.pdf')
    res.download(__dirname + '/brosur.pdf', 'brosur.pdf')
})

app.get('/pelatihan', (req, res, next) => {
    res.render('index', { subBab: req.query.subBab})
})

app.use((err, req, res, next) => {
    res.send('Terjadi error')
})

app.listen(8000, () => {
    console.log('App listen on port 8000')
})