const express = require("express")
const router = express.Router()
const Controller = require("../controllers/DgfGrowthPlanEnquiry.controller")


router.post("/add-enquiry", Controller.growthPlanEnquiry)
router.get("/get-enquiry", Controller.getAllContact)

module.exports = router