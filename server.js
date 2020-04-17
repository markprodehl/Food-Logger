const express = require("express");
const exphbs = require("express-handlebars");
const home_controllerRoutes = require("./controllers/home_controller")

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(home_controllerRoutes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});