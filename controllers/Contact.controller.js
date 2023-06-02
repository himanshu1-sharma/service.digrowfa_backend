const Contact = require("../models/Contact.model")

exports.contact = async (req, res) => {
    try {
        let { name, email, phone, category, message } = req.body;
        let emailExist = await Contact.findOne({ email: email })
        if (emailExist) return res.status(200).json({
            errorcode: 2,
            status: false,
            message: "Email already use",
            data: null
        })

        let newContact = new Contact({
            name, email, phone, category, message
        })
        newContact = await newContact.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Data Submitted Successfully",
            data: newContact
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
        let ContactList = await Contact.find({}).sort({ created_ts: -1 })
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