const router = require("express").Router();
const burger = require("../models/burger")

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgerObject = {
            burgers: data,
        }
        console.log(burgerObject);
        res.render("index", burgerObject);

        // This is a temp json dump
        // const templateData = { burgers: JSON.stringify(burgers, null, 2) };
        // res.render("index", templateData);

    })
});


module.exports = router;