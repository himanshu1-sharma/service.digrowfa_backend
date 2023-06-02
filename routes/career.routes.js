const express = require("express")
const router = express.Router()
const Controller = require("../controllers/Career.controller")
const { uploadS3CareerResume } = require("../middlewares/s3-file-upload")

router.post("/apply", uploadS3CareerResume.single("resume"), Controller.postCareer)
router.get("/get-all-application", Controller.getAllApplications)

module.exports = router