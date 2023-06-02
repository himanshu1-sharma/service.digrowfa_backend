const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const careerSchema = new Schema({
    resume: {
        type: String,
        default: null,
        require: true
    },
    name: {
        type: String,
        default: null,
        require: true
    },
    email: {
        type: String,
        default: null,
        require: true
    },
    number: {
        type: String,
        default: null,
        minlength: 6
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Career", careerSchema)