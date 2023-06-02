const UserConversationRecordModel = require("../models/userConversationRecord.model")


exports.userConversation = async (req, res) => {
    try {
        const {
            categoryId,
            categoryName,
            q1Question,
            q1Answer,
            q2Question,
            q2Answer,
            q3Question,
            q3Answer,
            q4Question,
            q4Answer,
            q5Question,
            q5Answer,
            q6Question,
            q6Answer,
            q7Question,
            q7Answer,
            name,
            email,
            number,
            whatsapp
        } = req.body


        let newQnA = new UserConversationRecordModel({
            categoryId,
            categoryName,
            question1: {
                question: q1Question,
                answer: q1Answer
            },
            question2: {
                question: q2Question,
                answer: q2Answer
            },
            question3: {
                question: q3Question,
                answer: {
                    businessName: q3Answer
                }
            },
            question4: {
                question: q4Question,
                answer: q4Answer
            },
            question5: {
                question: q5Question,
                answer: q5Answer
            },
            question6: {
                question: q6Question,
                answer: {
                    aboutBusiness: q6Answer
                }
            },
            question7: {
                question: q7Question,
                answer: q7Answer
            },
            name,
            email,
            number,
            whatsapp
        })

        newQnA = await newQnA.save();
        // console.log(newQnA)
        return res.status(201).json({ errorcode: 0, status: true, message: "user Conversation added successfully", data: newQnA });
    }
    catch (error) {
        // console.log(error)
        return res.status(204).json({ errorcode: 5, status: false, message: error.message, data: error });
    }
};


exports.getAllUserConversationRecord = async (req, res) => {
    try {
        let userConversationRecord = await UserConversationRecordModel.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get User Conversation Record successfully",
            data: userConversationRecord
        })
    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

exports.updateUserConersation = async (req, res) => {
    try {
        let { _id, status, statusMessage } = req.body
        let updateConersation = await UserConversationRecordModel.findById(_id)
        if (!updateConersation) return res.status(200).json({ errorcode: 3, status: false, msg: "Data not Found", data: null });
        updateConersation.status = status ? status : updateConersation.status
        updateConersation.statusMessage = statusMessage ? statusMessage : updateConersation.statusMessage
        updateConersation = await updateConersation.save()
        return res.status(200).json({ errorcode: 0, status: true, msg: "conversation Status Changed Successfullty", data: updateConersation });
    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

