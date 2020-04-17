var connection = require("./connection.js");

const orm = {
    getAll: (table, callback) => {
        //replaced burgers with ?? and passed table as a parameter to getAll(table),
        // Because we've passed table to getAll we need to add the [table] parameter below
        connection.query("SELECT * FROM ??", [table], (error, data) => {
            callback(data)
        })
    }
}

module.exports = orm;


//THIS IS MY CALLBACK 
// orm.getAll("burgers", burgers => console.log(burgers));

// [
//     RowDataPacket {
//       id: 1,
//       burger_name: 'Cheese Burger',
//       devoured: 0,
//       created_at: 2020-04-17T04:43:00.000Z
//     },
//     RowDataPacket {
//       id: 2,
//       burger_name: 'Classic Burger',
//       devoured: 1,
//       created_at: 2020-04-17T04:43:00.000Z
//     },
//     RowDataPacket {
//       id: 3,
//       burger_name: 'Double Burger',
//       devoured: 0,
//       created_at: 2020-04-17T04:43:00.000Z
//     }
//   ]