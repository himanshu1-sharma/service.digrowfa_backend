const DgfCustomPlanEnquiry = require("../models/DgfCustomPlanEnquiry.model")

exports.customPlanEnquiry = async (req, res) => {
    try {
        console.log(req.body)
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
            message,
            requirement
        } = req.body;

        // if (!name) return res.status(404).json({
        //     errorcode: 2,
        //     status: true,
        //     message: "Name is required",
        //     data: null
        // })
        // if (!email) return res.status(404).json({
        //     errorcode: 2,
        //     status: true,
        //     message: "Email is required",
        //     data: null
        // })
        // if (!phone) return res.status(404).json({
        //     errorcode: 2,
        //     status: true,
        //     message: "phone is required",
        //     data: null
        // })
        // if (!businessName) return res.status(404).json({
        //     errorcode: 2,
        //     status: true,
        //     message: "business Name is required",
        //     data: null
        // })
        // if (!country) return res.status(404).json({
        //     errorcode: 2,
        //     status: true,
        //     message: "country is required",
        //     data: null
        // })

        // if (!address) return res.status(404).json({
        //     errorcode: 2,
        //     status: true,
        //     message: "address is required",
        //     data: null
        // })
        // if (!industry) return res.status(404).json({
        //     errorcode: 2,
        //     status: true,
        //     message: "industry is required",
        //     data: null
        // })

        let newCustomPlanEnquiry = new DgfCustomPlanEnquiry({
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
            message,
            requirement
        })
        newCustomPlanEnquiry = await newCustomPlanEnquiry.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Data Submitted Successfully",
            data: newCustomPlanEnquiry
        })
    } catch (error) {
        console.log(error)
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

exports.getAllCustomPlanEnquiry = async (req, res) => {
    try {
        let CustomPlanEnquiryList = await DgfCustomPlanEnquiry.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all CustomPlanEnquiry successfully",
            data: CustomPlanEnquiryList
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