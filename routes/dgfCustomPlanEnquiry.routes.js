const express = require("express")
const router = express.Router()
const Controller = require("../controllers/DgfCustomPlanEnquiry.controller")


router.post("/add-enquiry", Controller.customPlanEnquiry)
router.get("/get-enquiry", Controller.getAllCustomPlanEnquiry)

module.exports = router