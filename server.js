const express = require("express");
const bodyParser = require("body-parser");
//connection for Heroku
const PORT = process.env.PORT || 8080;

//express
const app = express();
app.use(express.static("public"));

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//controller
const router = require("./controllers/burgersController.js");
app.use(router);

//listener
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});