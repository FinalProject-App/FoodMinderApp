const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    description: { type: String, required: true },
    expiration: { type: String, required: true}
});

const ItemsDB = mongoose.model("ItemsDB", ItemsSchema);

module.exports = ItemsDB;
