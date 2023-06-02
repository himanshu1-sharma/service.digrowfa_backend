const DgfGrowthPlan = require("../models/DgfGrowthPlanEnquiry.model")

exports.growthPlanEnquiry = async (req, res) => {
    try {
        let {
            name,
            email,
            phone,
            businessName,
            industry,
            country,
            state,
            city_district,
            postcode,
            address,
            message
        } = req.body;


        let newEnquiry = new DgfGrowthPlan({
            name,
            email,
            phone,
            businessName,
            industry,
            country,
            state,
            city_district,
            postcode,
            address,
            message
        })
        newEnquiry = await newEnquiry.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Data Submitted Successfully",
            data: newEnquiry
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

exports.getAllContact = async (req, res) => {
    try {
        let ContactList = await DgfGrowthPlan.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all Contact successfully",
            data: ContactList
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