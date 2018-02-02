
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
    expiration: "00/00/00"
  },
  {
    name: "Tas",
    item: "Frozen Dumplings",
    expiration: "00/00/00"
  },
  {
    name: "Mahesh",
    item: "Nature Valley Bars",
    expiration: "01/01/2020"
  },
  {
    name: "Chandani",
    item: "Guac",
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