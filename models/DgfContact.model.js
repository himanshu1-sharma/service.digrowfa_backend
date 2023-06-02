const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dgfContactSchema = new Schema({
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
    whatsapp: {
        type: String,
        default: null,
        require: true
    },
    businessName: {
        type: String,
        default: null,
        require: false
    },
    address: {
        type: String,
        default: null,
        require: false
    },
    message: {
        type: String,
        default: null,
        require: false
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("DgfContact", dgfContactSchema)