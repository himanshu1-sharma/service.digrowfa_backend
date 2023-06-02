const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionAnswersSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // category: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Category",
    //     require: true
    // },
    // question: {
    //     type: String,
    //     default: null,
    //     require: false
    // },
    // answers: {
    //     type: Array,
    //     default: [],
    //     require: false
    // },
    question1: {
        question: { type: String, default: null },
        answer: { type: [], default: null },
        suggestions: { type: [], default: null },
    },
    question2: {
        question: { type: String, default: null },
        answer: { type: [], default: null },
        suggestions: { type: [], default: null },
    },
    question3: {
        question: { type: String, default: null },
        answer: {
            businessName: { type: String, default: null }
        }
    },
    question4: {
        question: { type: String, default: null },
        answer: { type: [], default: null },
        suggestions: { type: [], default: null },
    },
    question5: {
        question: { type: String, default: null },
        answer: { type: [], default: null },
        suggestions: { type: [], default: null },
    },
    question6: {
        question: { type: String, default: null },
        answer: {
            aboutBusiness: { type: String, default: null }
        }
    },
    question7: {
        question: { type: String, default: null },
        answer: { type: [], default: null },
        suggestions: { type: [], default: null },
    },
});

module.exports = mongoose.model("questionAnswersSchema", questionAnswersSchema);