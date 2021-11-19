const express = require('express')
const morgan = require('morgan')
const authorizedUser = require('./authorizedUser')
const kite = require('./authorizedUser')
const app = express()

app.use([kite, authorizedUser])

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})

app.get('/api', (req, res) => {
    console.log(req.user)
    res.send('at the end of the string there is a kite')
})

app.get('/api/products', (req,res) => {
    console.log(req.email)
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})