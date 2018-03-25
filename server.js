//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
var db = require("./models");

//Create Express App
const app = express();

//Handlebars configuration
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static Directory
app.use(express.static("public"));

//Controllers
require("./controllers/api")(app);
require("./controllers/html")(app);

//ports and connection for Heroku
const PORT = process.env.PORT || process.argv[2] || 8080;
//listener

db.sequelize.sync().then(function(){
    app.listen(PORT, () => {
        console.log(`Server listening on: http://localhost:${PORT}`);
    });
});