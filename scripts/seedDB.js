
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Items",
  {
    useMongoClient: true
  }
);

const ItemsSeed = [
  {
    name: "Kevin",
    item: "campbell's soup",
    // expiration: "h"
  },
  {
    name: "Tas",
    item: "Frozen Dumplings",
    // expiration: "h"
  },
  {
    name: "Mahesh",
    item: "Nature Valley Bars",
    // expiration: "h"
  },
  {
    name: "Chandani",
    item: "Guac"
    // expiration: "h"
  },
  {
    name: "Lucky",
    item: "maccheese",
    // expiration: "h"
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