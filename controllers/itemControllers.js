const path = require("path");
const router = require("express").Router();
const db = require("../models");
const express = require("express");


const ItemsFunctions = {
    findAll: function(req, res) {
        db.ItemsDB
            .find(req.query)
            .where("email").equals(req.params.email)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.ItemsDB
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.ItemsDB
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.ItemsDB
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

router.get("/api/ItemsDB/:email", ItemsFunctions.findAll)

router.post("/api/ItemsDB", ItemsFunctions.create)

router.post("/signin/:email", ItemsFunctions.create)

router.delete("/api/ItemsDB/:id", ItemsFunctions.remove)

router.get("/api/ItemsDB/:id", ItemsFunctions.findById)


// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;