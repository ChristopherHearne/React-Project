const express = require('express')
const mongoose = require('mongoose')

const app = express(); 
mongoose.connect('mongodb+srv://habeed:h6DT6JUfH9wrCAP@cluster0.kjlgy40.mongodb.net/test')

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', (callback) => {
    console.log('Connected to DB')
})

// Express configs
app.use(express.json())
app.use(express.urlencoded({'extended': true}))
app.use( (req, res, next) =>  {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})

const port = process.env.REACT_APP_PORT || 3001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/api', (req, res) => {
    res.json({message: "Hello World"})
    console.log(res.json({message: "Hello world"}))
})

app.set('json spaces', 2)