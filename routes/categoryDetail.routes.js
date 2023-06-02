const express = require("express")
const router = express.Router();
const Controller = require("../controllers/categoryDetail.controller")
const { uploadS3CategoryImage } = require("../middlewares/s3-file-upload");

router.post("/create-category-detail", uploadS3CategoryImage.fields([
    { name: "video", maxcount: 1 },
    { name: "overviewImage", maxcount: 1 },
    { name: "companyImage", maxcount: 1 },
    { name: "workingprocessImage", maxcount: 1 },
    { name: "resultImage", maxcount: 1 },
]), Controller.createCategoryDetail)

router.get("/:id", Controller.getCategoryDetailById)

router.patch("/edit-category-detail", uploadS3CategoryImage.fields([
    { name: "video", maxcount: 1 },
    { name: "overviewImage", maxcount: 1 },
    { name: "companyImage", maxcount: 1 },
    { name: "workingprocessImage", maxcount: 1 },
    { name: "resultImage", maxcount: 1 },
]), Controller.updateCategoryDetailById)



module.exports = router