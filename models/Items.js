const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    name: { type: String, required: true},
    item: { type: String, required: true },
    expiration: { type: String, required: true}
});

const Items = mongoose.model("Items", ItemsSchema);

module.exports = Items;
