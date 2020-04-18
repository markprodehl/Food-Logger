const orm = require("../config/orm.js");

const burger = {
    selectAll: (callback) => orm.getAll("burgers", callback),
    insert: (burger_name, callback) => orm.insertOne("burgers", { burger_name }, callback),
    markEaten: (id, callback) => {
        orm.updateOne("burgers", { devoured: true }, id, callback);

    },
};



module.exports = burger;