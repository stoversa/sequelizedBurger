var db = require("../models");

module.exports = function (app) {

    app.post("/api/burgers", (req, res) => {
        db.burgers.create({
            name: req.body.name
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.put("/api/burgers/:id", (req, res) => {
        db.burgers.update({
            is_eaten: true
        },{
            where: {
                id: req.params.id
            }}).then(function (dbPost) {
                res.json(dbPost);
            });
    });
};