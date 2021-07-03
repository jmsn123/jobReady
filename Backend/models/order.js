var mongoose = require("mongoose");

var Schema = mongoose.Schema;
// how our orders should look !
// we need a ref to the user making the order
// each cart item will be an object so we can give them multiple items in the cart
// might look into using arrays so that i can map over an array of objects
// easier traversales <---- big typo yes  i know lol
var order = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  cart: { type: Object, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
  paymentId: { type: String, required: true },
});

module.exports = mongoose.model("Order", order);
