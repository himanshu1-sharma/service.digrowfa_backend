const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    profilepic: {
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
    password: {
        type: String,
        default: null,
        minlength: 6
    }
})

module.exports = mongoose.model("admin", adminSchema)