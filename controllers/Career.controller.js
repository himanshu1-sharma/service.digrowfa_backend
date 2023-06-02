const Career = require("../models/Career.model")


exports.postCareer = async (req, res) => {
    try {
        let { name, email, number } = req.body;

        let emailExist = await Career.findOne({ email: email })
        if (emailExist) return res.status(403).json({
            errorcode: 2,
            status: false,
            message: "Email already use",
            data: null
        })
        let career = new Career({
            resume: req.file && req.file.location ? req.file.location : null,
            name,
            email,
            number
        })
        career = await career.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Successfully Applied",
            data: career
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


exports.getAllApplications = async (req, res) => {
    try {
        let CareerList = await Career.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all Application successfully",
            data: CareerList
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