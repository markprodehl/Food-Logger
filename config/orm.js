var connection = require("./connection.js");

const orm = {
    getAll: (table, callback) => {
        connection.query("SELECT * FROM ??", [table], (error, data) => {
            if (error) {
                throw error;
            }
            callback(data);
        });
    },

    insertOne: (table, newRowValues, callback) => {
        const queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [table, newRowValues], (error, data) => {
            if (error) {
                throw error;
            }
            callback(data);
        });
    },

    updateOne: (table, updateValues, id, callback) => {
        const queryString = "UPDATE ?? SET ? WHERE id = ?";
        connection.query(
            queryString, [table, updateValues, id],
            (error, result) => {
                if (error) {
                    throw error;
                }
                callback(result);
            }
        );
    }
}

orm.updateOne("burgers", { burger_name: "Amazing Burger" }, 1, (result) => {
    console.log(result)
})




module.exports = orm;