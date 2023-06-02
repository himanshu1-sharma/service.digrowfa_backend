const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contactSchema = new Schema({
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
    phone: {
        type: String,
        default: null,
        require: true
    },
    category: {
        type: String,
        default: null,
        require: true
    },
    message: {
        type: String,
        default: null,
        require: true
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("contact", contactSchema)