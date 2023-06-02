const express = require("express");
const router = express.Router();
const Controller = require("../controllers/DgfRevolutionClientEnquiry.controller");

router.post("/add", Controller.addEnquiry);

router.get("/get", Controller.getRevolutionClientEnquiry);
router.post("/get-user-detail", Controller.getUserById);

module.exports = router;
