const path = require("path");
const router = require("express").Router();
const db = require("../models");
const express = require("express");

const SwapFunction = {
    findAll: function(req, res) {
        db.Swap
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Swap
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Swap
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Swap
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Swap
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

router.get("/api/Swap", SwapFunctions.findAll)

router.post("/api/Swap", SwapFunctions.create)

router.delete("/api/Swap/:id", SwapFunctions.remove)

router.get("/api/Swap/:id", SwapFunctions.findById)

router.patch("/api/Swap/:id", SwapFunctions.update)

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;