
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ItemsDB",
  {
    useMongoClient: true
  }
);

const ItemsDBSeed = [
  {
    email: "tasnuvah00@gmail.com",
    description: "campbell's soup",
    expiration: "00/00/00"
  },
  { email: "tasnuvah00@gmail.com",
    description: "Frozen Dumplings",
    expiration: "00/00/00"
  },
  {
    email: "noursalem0@gmail.com",
    description: "Nature Valley Bars",
    expiration: "01/01/2020"
  },
  {
    email: "noursalem0@gmail.com",
    description: "Guac",
    expiration: "07/10/2018"
  }
];


db.ItemsDB
  .remove({})
  .then(() => db.ItemsDB.collection.insertMany(ItemsDBSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });