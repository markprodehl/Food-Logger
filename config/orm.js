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
}


// insertOne

// updateOne

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