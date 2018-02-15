const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    description: { type: String, required: true },
    expiration: { type: String, required: true},
    email: {type: String }
});

const Items = mongoose.model("Items", ItemsSchema);

module.exports = Items;
