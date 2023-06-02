const express = require("express")
const router = express.Router()
const Controller = require("../controllers/Subscribe.controller")

router.post("/subscribe-newsletter", Controller.subscribeNews)
router.get("/subscribe-newsletter", Controller.getAllSubscribeNews)

module.exports = router