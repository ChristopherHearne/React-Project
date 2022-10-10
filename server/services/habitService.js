const Habit = require('../models/habitModel')

exports.getHabits = (req, res) => {
    Habit.find({}, (habits, err) => {
        if(err) res.status(401).send(err)
        else if(habits === null) res.status(404).json({Error: 'Could not find any habits'})
        else res.status(201).json(habits)
    })
}
exports.getHabitById = (req, res) => {
    Habit.findById(req.params.id, (habit, err) => {
        if(err) res.status(401).send(err)
        else if(habit === null) res.status(404).json({Error: `Could not find a habit with that id`})
        else res.status(201).json(habit)
    }) 
}
exports.getHabitsByUser = (req, res) => {
    Habit.find({createdBy: req.params.id}, (habits, err) => {
        if(err) res.status(401).send(err)
        else if(habits === null) res.status(404).json({Error: `Could not find habits with that createdBy id`})
        else res.status(201).json(habits)
    })
}
exports.postHabit = (req, res) => {
    const {id, title, createdBy} = req.body
    const newHabit = new Habit({id, title, createdBy})
    newHabit.save((err) => {
        if(err) res.status(401).send(err)
        else res.status(201).json(newHabit)
    })
}

exports.deleteHabit = (req, res) => {
    Habit.deleteOne({_id: req.params.id}, (habit, err) => {
        if(err) res.status(401).send(err)
        else if(habit === null) res.status(404).json({Error: `Could not delete habit since it was not found`})
        else res.status(201).json(habit)
    })
}