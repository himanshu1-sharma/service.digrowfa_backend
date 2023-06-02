const mongoose = require("mongoose")
const Schema = mongoose.Schema


const dgfRevolutionClientSchema = new Schema({
    profile: {
        type: {},
        default: null,
    },
    name: {
        type: String,
        default: null,
        require: true
    },
    companyName: {
        type: String,
        default: null,
        require: true
    },
    website: {
        type: String,
        default: null
    },
    facebook: {
        type: String,
        default: null
    },
    instagram: {
        type: String,
        default: null
    },

    logo: {
        type: {},
        default: null,
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("DgfRevolutionClient", dgfRevolutionClientSchema)