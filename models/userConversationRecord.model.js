const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userConversationRecord = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        default: null
    },
    categoryName: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ["Pending", "Converted", "Ongoing", "Not Interested"],
        default: "Pending"
    },
    statusMessage: {
        type: String,
        default: null
    },
    question1: {
        question: { type: String, default: null },
        answer: { type: String, default: null },
    },
    question2: {
        question: { type: String, default: null },
        answer: { type: String, default: null },
    },
    question3: {
        question: { type: String, default: null },
        answer: {
            businessName: { type: String, default: null }
        }
    },
    question4: {
        question: { type: String, default: null },
        answer: { type: String, default: null },
    },
    question5: {
        question: { type: String, default: null },
        answer: { type: String, default: null },
    },
    question6: {
        question: { type: String, default: null },
        answer: {
            aboutBusiness: { type: String, default: null }
        }
    },
    question7: {
        question: { type: String, default: null },
        answer: { type: String, default: null },
    },
    name: {
        type: String,
        default: null,
        require: false
    },
    email: {
        type: String,
        default: null,
        require: false
    },
    number: {
        type: String,
        default: null,
        require: false
    },
    whatsapp: {
        type: String,
        default: null,
        require: false
    },
    created_ts: {
        type: Date,
        default: Date.now
    }
    // questionId: {
    //     type: Schema.Types.ObjectId,
    //     ref : "questionAnswersSchema",
    //     require: true
    // },
    // question :{
    //     type: String,
    //     default: null,
    //     require: false
    // },
    // answer: {
    //     type: String,
    //     default: null,
    //     require: false
    // },
});

module.exports = mongoose.model("userConversationRecord", userConversationRecord);