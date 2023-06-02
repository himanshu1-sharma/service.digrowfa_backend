const express = require("express");
const router = express.Router();
const Controller = require("../controllers/DgfPayment.controller");

router.post("/checkout", Controller.checkout);
router.post("/payment-verification", Controller.paymentVerification);
router.get("/get-all-order", Controller.getAllOrder);
router.get("/get-user-order/:id", Controller.getOrderByUserId);

module.exports = router;
