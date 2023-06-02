const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dgfEnquirySchema = new Schema({
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
    orgainzation: {
        type: String,
        default: null,
        require: true
    },
    region: {
        type: String,
        default: null,
        require: true
    },
    address: {
        type: String,
        default: null,
        require: true
    },
    categoryName: {
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

module.exports = mongoose.model("DgfEnquiry", dgfEnquirySchema)