const express = require("express");
const router = express.Router()
const Controller = require("../controllers/DgfRevolutionClient.controller")
const { uploadS3RevolutionClientImage } = require("../middlewares/s3-file-upload");

router.post("/add", uploadS3RevolutionClientImage.fields([
    { name: "profile", maxcount: 1 },
    { name: "logo", maxcount: 1 }
]), Controller.addRevolutionClient)

router.get("/get", Controller.getRevolutionClient)



module.exports = router