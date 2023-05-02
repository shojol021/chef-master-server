const express = require('express')
const app = express()
const port = process.env.port || 3000

const data = require('./data.json')
// const cors = require('cors')

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/chefs', (req, res) => {
    res.send(data.chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefDetails = data.chefs.find(chef => chef.id === id)
    res.send(chefDetails)
})

app.listen(port)