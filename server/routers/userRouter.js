const express = require('express')
const userService  = require('../services/userService')
const router = express.Router()

router.post('/', (req, res) => {
    userService.createUser(req, res)
})

router.get('/', (req, res) => {
    userService.getAllUsers(req, res)
})

router.get('/:id', (req, res) => {
    userService.getUser(req, res)
})

router.get('/emails/:email', (req, res) => {
    userService.findUserByEmail(req, res)
})

module.exports = router