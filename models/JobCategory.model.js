const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobCategorySchema = new Schema({
    image: {
        type: {},
        default: null,
        require: true
    },
    name: {
        type: String,
        default: null,
        require: true
    },
    created_ts: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("JobCategory", jobCategorySchema)