const DgfRevolutionClient = require("../models/DgfRevolutionClient.model")

exports.addRevolutionClient = async (req, res) => {
    try {
        const { name, companyName, website, facebook, instagram } = req.body;
        let revolutionClient = new DgfRevolutionClient({
            profile: req.files && req.files["profile"] ? req.files["profile"][0].location : null,
            name,
            companyName,
            website,
            facebook,
            instagram,
            logo: req.files && req.files["logo"] ? req.files["logo"][0].location : null,
        })

        revolutionClient = await revolutionClient.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Revolution Client detail added successfully",
            data: revolutionClient
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


exports.getRevolutionClient = async (req, res) => {
    try {
        let revolutionClient = await DgfRevolutionClient.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all Revolution Client successfully",
            data: revolutionClient
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