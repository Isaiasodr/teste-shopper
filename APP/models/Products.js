const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Product = db.define("products", {
  name: {
    type: DataTypes.STRING,
    require: true,
  },
  price: {
    type: DataTypes.STRING,
    require: true,
  },
  qty_stock: {
    type: DataTypes.STRING,
    require: true,
  },
});

module.exports = Product;
