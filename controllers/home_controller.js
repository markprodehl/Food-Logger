const router = require("express").Router();
const burger = require("../models/burger")

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgerObject = {
            burgers: data,
        }
        console.log(burgerObject);
        res.render("index", burgerObject);

    })
});

router.post("/api/burgers", (req, res) => {
    // get values from request body
    const newBurgerName = req.body.burger_name;
    //use model to create burger with values
    burger.insert(newBurgerName, () => {
            //redirect the client to home page with 303
            //status code (see other)
            const SEE_OTHER = 303;
            res.redirect(SEE_OTHER, "/");
        })
        //server needs to client with new burger as json
})

// PATCH /api/todos/:id
router.patch("/api/burgers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) {
        return res.sendStatus(404);
    }

    // use todo model to mark the todo as done
    burger.markEaten(req.params.id, () => {
        // send ok status to client
        res.end();
    });
});

module.exports = router;