var connection = require("./connection.js");

const orm = {
    getAll: () => {
        connection.query("SELECT * FROM burgers", (error, data) => {
            console.log(data)
        })
    }
}

module.exports = orm;

orm.getAll();