const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dgfRevolutionClientCommentsSchema = new Schema({
    userProfile: {
        type: {},
        default: null,
    },
    name: {
        type: String,
        default: null,
        require: true
    },
    role: {
        type: String,
        default: null,
        require: true
    },
    comment: {
        type: String,
        default: null,
        require: true
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("DgfRevolutionClientComments", dgfRevolutionClientCommentsSchema)