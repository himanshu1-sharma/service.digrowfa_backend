const DgfEnquiryt = require("../models/DgfEnquiry.model")

exports.enquiry = async (req, res) => {
    try {
        let { name, email, phone, orgainzation, region, address, categoryName, message } = req.body;
        if (!name, !email, !phone, !orgainzation, !region, !address, !categoryName, !message)
            return res.status(203).json({
                errorcode: 2,
                status: true,
                message: "Please Fill All Feilds",
                data: null
            })
        let newEnquiry = new DgfEnquiryt({
            name, email, phone, orgainzation, region, address, categoryName, message
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

exports.getAllEnquiry = async (req, res) => {
    try {
        let EnquiryList = await DgfEnquiryt.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all Enquiry successfully",
            data: EnquiryList
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