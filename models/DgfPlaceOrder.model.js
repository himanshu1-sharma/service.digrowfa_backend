const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dgfPlaceOrderSchema = new Schema({
  user: {
    type: {},
    default: null,
  },
  orderId: {
    type: String,
    default: null,
    require: true,
  },
  entity: {
    type: String,
    default: null,
    require: true,
  },
  amount: {
    type: String,
    default: null,
    require: true,
  },
  amount_paid: {
    type: String,
    default: null,
    require: true,
  },
  amount_due: {
    type: String,
    default: null,
    require: true,
  },
  currency: {
    type: String,
    default: null,
    require: true,
  },
  receipt: {
    type: String,
    default: null,
    require: true,
  },
  offer_id: {
    type: String,
    default: null,
    require: true,
  },
  status: {
    type: String,
    default: null,
    require: true,
  },
  created_ts: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("DgfPlaceOrder", dgfPlaceOrderSchema);
