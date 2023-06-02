const DgfRevolutionClientComments = require("../models/DgfRevolutionClientComments.model")

exports.addComment = async (req, res) => {
    try {
        const { name, role, comment } = req.body
        let revolutionClientComment = new DgfRevolutionClientComments({
            userProfile: req.files && req.files["userProfile"] ? req.files["userProfile"][0].location : null,
            name,
            role,
            comment
        })
        revolutionClientComment = await revolutionClientComment.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Revolution Client commnet added successfully",
            data: revolutionClientComment
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

exports.getRevolutionClientComments = async (req, res) => {
    try {
        let revolutionClientComments = await DgfRevolutionClientComments.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all Revolution Client Comments successfully",
            data: revolutionClientComments
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