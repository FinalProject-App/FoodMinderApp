const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  description: { type: String, required: true },
  expiration: { type: String, required: true },
  timeLeft: { type: String, required: true}
});

const swapSchema = new Schema ({
  description: { type: String, required: true},
  expiration: {type: String, required: true}
})

const Item = mongoose.model("Item", itemSchema);
const Swap = mongoose.model("Swap Items", swapSchema);

module.exports = Item;
