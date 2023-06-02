const express = require("express")
const router = express.Router();
const Controller = require("../controllers/JobCategory.controller")
const { uploadS3JobCategoryImage } = require("../middlewares/s3-file-upload");

router.post("/create-category", uploadS3JobCategoryImage.single("image"), Controller.addJobCategory)
router.get("/get-all-category", Controller.getAllJobCategory)
router.delete("/delete-category/:categoryId", Controller.deleteCategory)
router.patch("/edit-category", uploadS3JobCategoryImage.single("image"), Controller.editCategory)

module.exports = router