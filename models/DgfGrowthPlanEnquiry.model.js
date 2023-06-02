const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dgfGrowthPlanSchema = new Schema({
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
    businessName: {
        type: String,
        default: null,
        require: true
    },
    industry: {
        type: String,
        default: null,
        require: true
    },
    country: {
        type: String,
        default: null,
        require: false
    },
    state: {
        type: String,
        default: null,
        require: false
    },
    city_district: {
        type: String,
        default: null,
        require: false
    },
    postcode: {
        type: String,
        default: null,
        require: false
    },
    address: {
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

module.exports = mongoose.model("DgfGrowthPlan", dgfGrowthPlanSchema)