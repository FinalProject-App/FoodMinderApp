
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Items",
  {
    useMongoClient: true
  }
);

const ItemsSeed = [
  {
    description: "campbell's soup",
    expiration: "00/00/00"
  },
  {
    description: "Frozen Dumplings",
    expiration: "00/00/00"
  },
  {
    description: "Nature Valley Bars",
    expiration: "01/01/2020"
  },
  {
    description: "Guac",
    expiration: "07/10/2018"
  }
];


db.Items
  .remove({})
  .then(() => db.Items.collection.insertMany(ItemsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });