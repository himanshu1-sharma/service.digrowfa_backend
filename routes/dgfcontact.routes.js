const express = require("express")
const router = express.Router()
const Controller = require("../controllers/DgfContact.controller")


router.post("/add-contact", Controller.contact)
router.get("/get-contact", Controller.getAllContact)

module.exports = router