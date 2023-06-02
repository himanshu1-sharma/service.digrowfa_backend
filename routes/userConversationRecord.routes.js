const express = require("express");
const router = express.Router();
const Controller = require("../controllers/userConversationRecord.controller");

router.post("/add-user-conversation", Controller.userConversation);
router.get("/get-user-conversation", Controller.getAllUserConversationRecord);
router.post("/update-user-conversation", Controller.updateUserConersation);

module.exports = router;