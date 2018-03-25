const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
const bodyParser = require("body-parser");

router.get("/", (req, res) => {
    burger.all(function (data) {
        const hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.name, function (result) {
        res.json({ id: result.insertId }); // Send back the ID of the new quote
        });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.update(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end(); //throw 404 for no result
        } else {
            res.status(200).end();//otherwise, send 200 response
        }
    });
});

module.exports = router;