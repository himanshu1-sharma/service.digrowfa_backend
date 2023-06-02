const Razorpay = require("razorpay");
const { validationResult } = require("express-validator");
const shortid = require("shortid");
const DgfPlaceOrder = require("../models/DgfPlaceOrder.model");
const mongoose = require("mongoose");
const DgfConfirmOrder = require("../models/DgfConfirmOrder.model");

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

exports.checkout = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errs = [];
      let err_msgs = { ...errors };
      err_msgs.errors.forEach((err) => errs.push(err.msg));
      return res
        .status(200)
        .json({ errorcode: 1, status: false, msg: errs, data: null });
    }

    const payment_capture = 1;
    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: payment_capture,
    };
    const order = await instance.orders.create(options);

    console.log("order", order)

    const {
      user,
      orderId,
      entity,
      amount,
      amount_paid,
      amount_due,
      currency,
      receipt,
      offer_id,
      status,
    } = req.body;

    console.log("checkout body", req.body);
    let newOrder = new DgfPlaceOrder({
      user: req.body.userData,
      orderId: order.id,
      entity: order.entity,
      amount: order.amount,
      amount_paid: order.amount_paid,
      amount_due: order.amount_due,
      currency: order.currency,
      receipt: order.receipt,
      offer_id: order.offer_id,
      status: order.status,
    });

    newOrder = await newOrder.save();

    console.log("newOrder", newOrder);

    return res.status(201).json({
      errorcode: 0,
      status: true,
      message: "New Order Data Submitted Successfully",
      data: newOrder,
    });
    // return res.status(200).json({
    //   id: order.id,
    //   currency: order.currency,
    //   amount: order.amount,
    //   receipt: order.receipt,
    //   status: order.status,
    // });
  } catch (error) {
    console.log("error", error);
    return res.status(204).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};

exports.getAllOrder = async (req, res) => {
  try {
    let dgfGetOrder = await DgfPlaceOrder.find({}).sort({ created_ts: -1 });
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "Get all Revolution Client Order successfully",
      data: dgfGetOrder,
    });
  } catch (error) {
    return res.status(204).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};

exports.getOrderByUserId = async (req, res) => {
  try {
    const { id } = req.params.id;
    console.log("req.params", req.params);
    let userOrder = await DgfPlaceOrder.aggregate([{}]);
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "User Order Detail found",
      data: userOrder,
    });
  } catch (error) {
    console.log(error);
    return res.status(204).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};

exports.paymentVerification = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let errs = [];
      let err_msgs = { ...errors };
      err_msgs.errors.forEach((err) => errs.push(err.msg));
      return res
        .status(200)
        .json({ errorcode: 1, status: false, msg: errs, data: null });
    }
    console.log("payment verification", req.body);

    const { options, orderdata, response } = req.body;

    let orderConfirm = new DgfConfirmOrder({
      user: orderdata,
      amount: options.amount,
      currency: options.currency,
      name: options.name,
      order_id: options.order_id,
      address: options.notes.address,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_order_id: response.razorpay_order_id,
      razorpay_signature: response.razorpay_signature,
    });

    orderConfirm = await orderConfirm.save();

    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "User Order Detail found",
      data: req.body,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(204).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};
