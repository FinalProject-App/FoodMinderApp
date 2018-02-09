// const path = require("path");
// const router = require("express").Router();
// const db = require("../models");
// // const express = require("express");



// const itemsFunctions = {
//     findAll: function(req, res) {
//         db.Items
//             .find(req.query)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     findById: function(req, res) {
//         db.Items
//             .findById(req.params.id)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     create: function(req, res) {
//         db.Items
//             .create(req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     update: function(req, res) {
//         db.Items
//             .findOneAndUpdate({ _id: req.params.id }, req.body)
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     remove: function(req, res) {
//         db.Items
//             .findById({ _id: req.params.id })
//             .then(dbModel => dbModel.remove())
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     }
// }

// router.get("/api/items", itemsFunctions.findAll)


// router.post("/api/items", itemsFunctions.create)


// router.delete("/api/items/:id", itemsFunctions.remove)


// router.get("/api/items/:id", itemsFunctions.findById)

// // router.patch("/api/items/:id", itemsFunctions.update)

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// module.exports = router;