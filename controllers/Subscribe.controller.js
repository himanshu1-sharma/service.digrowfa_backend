const Subscribe = require("../models/Subscribe.model")

exports.subscribeNews = async (req, res) => {
    try {
        let { email } = req.body;
        let emailExist = await Subscribe.findOne({ email: email })
        if (emailExist) return res.status(200).json({
            errorcode: 2,
            status: false,
            message: "Already Subscribed",
            data: null
        })
        let subscribe = new Subscribe({ email })
        subscribe = await subscribe.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "subscribe successfully",
            data: subscribe
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


exports.getAllSubscribeNews = async (req, res) => {
    try {
        let subscribeList = await Subscribe.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all Subscribe successfully",
            data: subscribeList
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