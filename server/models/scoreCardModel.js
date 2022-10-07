const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreCardSchema = new Schema(
    {
        id: {type: mongoose.Types.ObjectId, unique: true},
        createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
        unassignedList: [{
            habit: {type: Schema.Types.ObjectId, ref: 'Habit'}}
        ],
        positiveList: [{
            habit: {type: Schema.Types.ObjectId, ref: 'Habit'}}
        ],
        neutralList: [{
            habit: {type: Schema.Types.ObjectId, ref: 'Habit'}}
        ],
        negativeList: [{
            habit: {type: Schema.Types.ObjectId, ref: 'Habit'}}
        ]
    },
    {
        versionKey: false, 
        collection: 'habit_scorecards'
    }
)

const scoreCard = mongoose.model("Habit_scorecards", scoreCardSchema)
module.exports = scoreCard