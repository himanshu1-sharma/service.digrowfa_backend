const express = require("express");
const router = express.Router();
const Controller = require("../controllers/questionAnswers.controller.js");

router.get("/getAllQnA", Controller.getAllQnA);
router.post("/addQnA", Controller.addQnA);
router.put("/editQnA", Controller.editQnAById);

// router.post("/deleteQnA", Controller.deleteQnA);
// router.post("/updateQnA", Controller.updateQnA);
// router.post("/storeUserConversation", Controller.storeUserConversation);
// router.get("/getUserConversation", Controller.getUserConversation);

module.exports = router;