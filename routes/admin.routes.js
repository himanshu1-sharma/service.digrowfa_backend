const express = require("express")
const router = express.Router()
const { uploadS3AdminProfile } = require("../middlewares/s3-file-upload")
const Controller = require("../controllers/admin.controller")

router.post("/create-admin", uploadS3AdminProfile.single("profilepic"), Controller.createAdmin)
router.post("/admin-login", Controller.login)

module.exports = router