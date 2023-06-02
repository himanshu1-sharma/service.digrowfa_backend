const express = require("express");
const router = express.Router()
const Controller = require("../controllers/DgfRevolutionClientComments.controller")
const { uploadS3RevolutionClientImage } = require("../middlewares/s3-file-upload");

router.post("/add", uploadS3RevolutionClientImage.fields([
    { name: "userProfile", maxcount: 1 }
]), Controller.addComment)

router.get("/get", Controller.getRevolutionClientComments)



module.exports = router