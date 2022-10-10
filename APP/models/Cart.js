const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Cart = db.define("cart", {
  products: [
    {
      productID: {
        type: DataTypes.STRING,
      },
      qty: {
        type: DataTypes.NUMBER,
        default: 1,
      },
    },
  ],
});

module.exports = Cart;
