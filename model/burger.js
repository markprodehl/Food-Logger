const orm = require("../config/orm.js");

const burger = {
    all: (callback) => orm.getAll("burgers", callback),
};

module.burger;

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