const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
    email: {
        type: String,
        default: null,
        require: true
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("subscribe", subscribeSchema)