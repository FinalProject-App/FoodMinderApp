const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  description: { type: String, required: true },
  expiration: { type: String, required: true },
  timeLeft: { type: String, default: (Date.now - this.expiration) }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
