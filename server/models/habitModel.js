const mongoose = require('mongoose')
const Schema = mongoose.Schema

const habitSchema = new Schema(
    {
        id: {type: mongoose.Types.ObjectId, unqiue: true},
        title: String, 
        createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
    },
    {
        versionKey: false, 
        collection: 'habits'
    }
)
const habit = mongoose.model('Habits', habitSchema)
module.exports = habit