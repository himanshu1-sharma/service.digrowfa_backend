const express = require("express")
const router = express.Router()
const Controller = require("../controllers/DgfEnquiry.controller")


router.post("/add-enquiry", Controller.enquiry)
router.get("/get-enquiry", Controller.getAllEnquiry)

module.exports = router