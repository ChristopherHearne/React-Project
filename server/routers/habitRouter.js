const express = require('express')
const habitService = require('../services/habitService')
const router = express.Router()

router.get('/', (req, res) => {
    habitService.getHabits(req, res)
})

router.get('/:id', (req, res) => {
    habitService.getHabitById(req, res)
})

router.post('/', (req, res) => {
    habitService.postHabit(req, res)
})

module.exports = router