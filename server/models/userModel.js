const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
        name: String, 
        givenName: String,
        familyName: String, 
        email: String, 
        pictureURL: String,
        domain: String,
    },
    {
        versionKey: false,
        autoIndex: false,
        collection: "user_info"
    })

const user = mongoose.model("user_info", userSchema)
module.exports = user 