const User = require('../models/userModel')

exports.getAllUsers = (req, res) => {
    User.find({}, (users, err) => {
        if(err) {
            res.status(401).send(err)
        }
        else{
            res.status(201).json(users)
        }
    })
}

exports.getUser = (req, res) => {
    User.findById(req.params.id, (user, err) => {
        if(err) {
            res.status(401).send(err)
        }
        if(user === null) {
            res.status(404).json({Error: `Could not find a user with that id`})
        }
        else{
            res.status(201).json(user)
        }
    })
}

exports.createUser = (req, res) => {
    const {id, name, givenName, familyName, email, pictureURL, domain} = req.body
    const userInfo = new User({id, name, givenName, familyName, email, pictureURL, domain})
    userInfo.save((err) => {
        if (err) res.status(401).send(err)
        res.status(201).json(userInfo)
    })
}

exports.findUserByEmail = (req, res) => {
    User.findOne({email: req.params.email}, (user, err) => {
        if(err) {
            res.status(401).send(err)
        }
        else if(user === null) {
            res.status(404).json({Error: "Could not find a user with that email"})
        }
        else{
            res.status(201).json(user)
        }
    })
}