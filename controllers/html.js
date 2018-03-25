var db = require("../models");

module.exports = function (app) {

    app.get("/", (req, res) =>
        db.burgers.findAll().then(results => {
            var hbsArray = [];
            results.forEach(v => hbsArray.push(v.dataValues));
            console.log(hbsArray);
            res.render("index", {burger: hbsArray});
        }));
    };