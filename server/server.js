const express = require('express')
const mongoose = require('mongoose')
const users = require('./routers/userRouter')
const habits = require('./routers/habitRouter')

const app = express(); 
app.use(express.json())
app.use(express.urlencoded({'extended': true}))
mongoose.connect(
    'mongodb+srv://habeed:h6DT6JUfH9wrCAP@cluster0.kjlgy40.mongodb.net/habeed'
)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', (callback) => {
    console.log('Connected to DB')
})

// Express configs
app.use( (req, res, next) =>  {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, credentials, cors");
    next();
})
app.set('json spaces', 2)

const port = process.env.REACT_APP_PORT || 3002

app.listen(port, () => {
    console.log(`Server is running on port ${port}`) 
})

// Routers
app.use('/users', users)
app.use('/habits', habits)
