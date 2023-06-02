const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dgfRevolutionClientEnquirySchema = new Schema({
    category: {
        type: String,
        default: null,
        require: true
    },
    name: {
        type: String,
        default: null,
        require: true
    },
    businessName: {
        type: String,
        default: null
    },
    gst: {
        type: String,
        default: null
    },
    number: {
        type: String,
        default: null,
        require: true
    },
    email: {
        type: String,
        default: null,
        require: true
    },
    country: {
        type: String,
        default: null,
        require: true
    },
    address: {
        type: String,
        default: null,
        require: true
    },
    cityDistrict: {
        type: String,
        default: null
    },
    postcode: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    message: {
        type: String,
        default: null
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("DgfRevolutionClientEnquiry", dgfRevolutionClientEnquirySchema)