const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dgfConfirmOrderSchema = new Schema({
  user: {
    type: {},
    default: null,
  },
  amount: {
    type: Number,
    default: null,
  },
  currency: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  order_id: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  razorpay_payment_id: {
    type: String,
    default: null,
  },
  razorpay_order_id: {
    type: String,
    default: null,
  },
  razorpay_signature: {
    type: String,
    default: null,
  },
  created_ts: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("DgfConfirmOrder", dgfConfirmOrderSchema);
