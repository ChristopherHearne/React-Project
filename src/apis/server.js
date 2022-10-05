import express from 'express'
import mongoose from 'mongoose'

const app = express()
mongoose.connect(process.env.REACT_APP_MONGODB_CONNECTION_STRING)

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

const port = process.env.REACT_APP_PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.set('json spaces', 2)