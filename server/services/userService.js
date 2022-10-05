const User = require('../models/userModel')

exports.getAllUsers = (req, res) => {
    User.find((users, err) => {
        if(err) res.status(401).send(err)
        res.status(201).json(users)
    })
}

exports.getUser = (req, res) => {
    User.findById(req.params._id, (user, err) => {
        if(err) res.status(401).send(err)
        if(user === null) res.status(404).json({Error: `Could not find a user with that id`})

        res.status(201).json(user)
    })
}

exports.createUser = (req, res) => {
    const {id, name, givenName, familyName, email, pictureURL, domain} = req.body

    const user = new User({id, name, givenName, familyName, email, pictureURL, domain})
    User.save) 
}