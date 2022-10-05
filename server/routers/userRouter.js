const express = require('express')
const router = express.Router()

const userService = require('../services/userService')

router.post('/users', (req, res) => {
    userService.createUser(req, res)
})

router.get('/users', (req, res) => {
    userService.getAllUsers(req, res)
})

module.exports = router