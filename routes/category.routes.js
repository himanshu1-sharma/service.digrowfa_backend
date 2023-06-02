const express = require("express")
const router = express.Router();
const Controller = require("../controllers/category.controller")
const { uploadS3CategoryImage } = require("../middlewares/s3-file-upload");

router.post("/create-category", uploadS3CategoryImage.single("image"), Controller.createCategory)
router.get("/get-all-category", Controller.getAllCategory)
router.delete("/delete-category/:categoryId", Controller.deleteCategory)
router.patch("/edit-category", uploadS3CategoryImage.single("image"), Controller.editCategory)


module.exports = router