const express = require("express")
const router = express.Router();
const Controller = require("../controllers/JobDetail.controller")


router.post("/create-job-detail", Controller.createJobDetail)
router.get("/get-all-job", Controller.getAllJobList)
router.put("/edit-job", Controller.editJobById)
router.delete("/delete-job-list/:id", Controller.deleteJobListById)
router.get("/job-detail/:id", Controller.getJobDetailById)

module.exports = router