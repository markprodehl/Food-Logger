const router = require("express").Router();
const burger = require("../models/burger")

router.get("/", (req, res) => {
    burger.all((burgers) => {

        // This is a temp json dump
        const templateData = { burgers: JSON.stringify(burgers, null, 2) };
        res.render("index", templateData);

    })
});


module.exports = router;