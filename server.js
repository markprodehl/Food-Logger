const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.get("/", (req, res) => {
    //index id the Handlebars file name.
    res.render("index");
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});