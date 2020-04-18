const orm = require("../config/orm.js");

const burger = {
    selectAll: (callback) => orm.getAll("burgers", callback),
    insert: (burger_name, callback) => orm.insertOne("burgers", { burger_name }, callback),
};



module.exports = burger;



// burger.all(burgers => console.log(burgers));
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

// burger.insert("Mushroom Burger", result => console.log(result))

// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 4,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }