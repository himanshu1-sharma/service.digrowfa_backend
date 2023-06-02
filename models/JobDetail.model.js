const mongoose = require("mongoose")
const Schema = mongoose.Schema

const jobDetailSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "JobCategory",
        require: false
    },
    title: {
        type: String,
        default: null,
        require: false
    },
    description: {
        type: String,
        default: null,
        require: false
    },
    responsibilities: {
        type: [],
        default: null,
        require: false
    },
    qualification: {
        type: [],
        default: null,
        require: false
    },
    skills: {
        type: [],
        default: null,
        require: false
    },
    minExperience: {
        type: String,
        default: null,
        require: false
    },
    maxExperience: {
        type: String,
        default: null,
        require: false
    },
    location: {
        type: String,
        default: null,
        require: false
    },
    jobType: {
        type: String,
        enum: ["Full Time", "Part Time", "Internship"],
        default: "Full Time"
    },
    workType: {
        type: String,
        enum: ["Hybrid", "Onsite", "Remote"],
        default: "Onsite"
    },
    isUrgent: {
        type: Boolean,
        default: false
    },
    created_ts: {
        type: Date,
        default: Date.now
    },


})


module.exports = mongoose.model("JobDetail", jobDetailSchema)