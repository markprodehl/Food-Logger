const router = require("express").Router();

router.get("/", (req, res) => {
    //index id the Handlebars file name.
    res.render("index");
});


module.exports = router;