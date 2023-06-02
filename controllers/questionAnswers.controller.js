const mongoose = require("mongoose");
const Category = require("../models/Category.model")
const QuestionAnswers = require("../models/QuestionAnswers.model");
const userConversationRecordModel = require("../models/userConversationRecord.model");
const UserConversationRecord = require("../models/userConversationRecord.model")

exports.getAllQnA = async (req, res) => {
    try {
        let allQnA = await QuestionAnswers.find({});
        return res.status(200).json({ errorcode: 0, status: true, message: "Get all QnA successfully", data: allQnA });
    }
    catch (error) {
        return res.status(204).json({ errorcode: 3, status: false, message: error.message, data: error });
    }
};

exports.addQnA = async (req, res) => {
    try {
        // const { categoryId, question, answers } = req.body;
        // if (!categoryId)
        //     return res.status(403).json({ errorcode: 1, status: false, message: "Category Id is required", data: null });

        // const categoryExist = await Category.findById(categoryId);
        // if (!categoryExist)
        //     return res.status(403).json({ errorcode: 2, status: false, message: "Category doesn't exist", data: null });

        // let newQnA = new QuestionAnswers({
        //     _id: new mongoose.Types.ObjectId(),
        //     category: categoryId,
        //     question: question ? question : null,
        //     answers: answers ? answers : []
        // });
        // newQnA = await newQnA.save();
        // return res.status(201).json({ errorcode: 0, status: true, message: "QnA added successfully", data: newQnA });
        const {
            q1Question,
            q1Answer,
            q1Suggestions,
            q2Question,
            q2Answer,
            q2Suggestions,
            q3Question,
            q3Answer,
            q4Question,
            q4Answer,
            q4Suggestions,
            q5Question,
            q5Answer,
            q5Suggestions,
            q6Question,
            q6Answer,
            q7Question,
            q7Answer,
            q7Suggestions
        } = req.body


        let newQnA = new QuestionAnswers({
            question1: {
                question: q1Question,
                answer: q1Answer ? q1Answer : [],
                suggestions: q1Suggestions ? q1Suggestions : []
            },
            question2: {
                question: q2Question,
                answer: q2Answer ? q2Answer : [],
                suggestions: q2Suggestions ? q2Suggestions : []
            },
            question3: {
                question: q3Question,
                answer: {
                    businessName: q3Answer
                }
            },
            question4: {
                question: q4Question,
                answer: q4Answer ? q4Answer : [],
                suggestions: q4Suggestions ? q4Suggestions : []
            },
            question5: {
                question: q5Question,
                answer: q5Answer ? q5Answer : [],
                suggestions: q5Suggestions ? q5Suggestions : []
            },
            question6: {
                question: q6Question,
                answer: {
                    aboutBusiness: q6Answer
                }
            },
            question7: {
                question: q7Question,
                answer: q7Answer ? q7Answer : [],
                suggestions: q7Suggestions ? q7Suggestions : []
            },
        })

        newQnA = await newQnA.save();
        // console.log(newQnA)
        return res.status(201).json({ errorcode: 0, status: true, message: "QnA added successfully", data: newQnA });
    }
    catch (error) {
        // console.log(error)
        return res.status(204).json({ errorcode: 5, status: false, message: error.message, data: error });
    }
};

exports.editQnAById = async (req, res) => {
    try {
        let {
            _id,
            q1Question,
            q1Answer,
            q1Suggestions,
            q2Question,
            q2Answer,
            q2Suggestions,
            q3Question,
            q4Question,
            q4Answer,
            q4Suggestions,
            q5Question,
            q5Answer,
            q5Suggestions,
            q6Question,
            q7Question,
            q7Answer,
            q7Suggestions
        } = req.body


        if (!_id) return res.status(403).json({
            errorcode: 1,
            status: false,
            message: "Id should be Present",
            data: null
        })

        let editQnA = await QuestionAnswers.findById(_id)
        if (!editQnA) return res.status(404).json({
            errorcode: 2,
            status: false,
            message: "Id not found",
            data: null
        })

        editQnA.question1.question = q1Question ? q1Question : editQnA.question1.question
        editQnA.question1.answer = q1Answer.length !== 0 ? q1Answer : editQnA.question1.answer
        editQnA.question1.suggestions = q1Suggestions.length !== 0 ? q1Suggestions : editQnA.question1.suggestions
        editQnA.question2.question = q2Question ? q2Question : editQnA.question2.question
        editQnA.question2.answer = q2Answer ? q2Answer : editQnA.question2.answer
        editQnA.question2.suggestions = q2Suggestions ? q2Suggestions : editQnA.question2.suggestions
        editQnA.question3.question = q3Question ? q3Question : editQnA.question3.question
        editQnA.question4.question = q4Question ? q4Question : editQnA.question4.question
        editQnA.question4.answer = q4Answer.length !== 0 ? q4Answer : editQnA.question4.answer
        editQnA.question4.suggestions = q4Suggestions !== 0 ? q4Suggestions : editQnA.question4.suggestions
        editQnA.question5.question = q5Question ? q5Question : editQnA.question5.question
        editQnA.question5.answer = q5Answer.length !== 0 ? q5Answer : editQnA.question5.answer
        editQnA.question5.suggestions = q5Suggestions !== 0 ? q5Suggestions : editQnA.question5.suggestions
        editQnA.question6.question = q6Question ? q6Question : editQnA.question6.question
        editQnA.question7.question = q7Question ? q7Question : editQnA.question7.question
        editQnA.question7.answer = q7Answer.length !== 0 ? q7Answer : editQnA.question7.answer
        editQnA.question7.suggestions = q7Suggestions !== 0 ? q7Suggestions : editQnA.question7.suggestions


        let data = await editQnA.save()

        return res.status(200).json({
            errorcode: 0,
            status: false,
            message: "QnA edit successfully",
            data: data
        })

    } catch (error) {
        console.log("error", error)
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}



// exports.deleteQnA = async (req, res) => {
//     try {
//         const { categoryId, qId } = req.body;
//         if (!categoryId || !qId)
//             return res.status(403).json({ errorcode: 1, status: false, message: "Category Id and qId is required", data: null });

//         const questionExist = await QuestionAnswers.findOne({ _id: qId, category: categoryId });
//         if (!questionExist)
//             return res.status(403).json({ errorcode: 2, status: false, message: "Question doesn't exist", data: null });

//         await QuestionAnswers.deleteOne({ _id: qId, category: categoryId });
//         return res.status(200).json({ errorcode: 0, status: true, message: "QnA deleted successfully", data: null });
//     }
//     catch (error) {
//         return res.status(204).json({ errorcode: 2, status: false, message: error.message, data: error });
//     }
// };

// exports.updateQnA = async (req, res) => {
//     try {
//         const { categoryId, qId, updatedQuestion, updatedAnswers } = req.body;
//         if (!categoryId || !qId)
//             return res.status(403).json({ errorcode: 1, status: false, message: "Category Id and qId is required", data: null });

//         const questionExist = await QuestionAnswers.findOne({ _id: qId, category: categoryId });
//         if (!questionExist)
//             return res.status(403).json({ errorcode: 2, status: false, message: "Question doesn't exist", data: null });
//         const updatedQnA = await QuestionAnswers.updateOne({ _id: qId, category: categoryId }, { $set: { question: updatedQuestion, answers: updatedAnswers } });
//         return res.status(200).json({ errorcode: 0, status: true, message: "QnA updated successfully", data: updatedQnA });
//     }
//     catch (error) {
//         return res.status(204).json({ errorcode: 3, status: false, message: error.message, data: error });
//     }
// };

// exports.storeUserConversation = async (req, res) => {
//     try {
//         await userConversationRecordModel.insertMany(req.body.conversation);
//         return res.status(200).json({ errorcode: 0, status: true, message: "User conversation stored successfully", data: null });
//     }
//     catch (error) {
//         return res.status(204).json({ errorcode: 3, status: false, message: error.message, data: error });
//     }
// };

// exports.getUserConversation = async (req, res) => {
//     try {
//         const { email } = req.query;
//         if (!email)
//             return res.status(403).json({ errorcode: 1, status: false, message: "Email is required", data: null });

//         const conversationData = await userConversationRecordModel.find({ email: email });
//         return res.status(200).json({ errorcode: 0, status: true, message: "Get User conversation successfully", data: conversationData });
//     }
//     catch (error) {
//         return res.status(204).json({ errorcode: 2, status: false, message: error.message, data: error });
//     }
// };