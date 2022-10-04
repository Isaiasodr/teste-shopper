const Products = require("../models/Products");

module.exports = class productsController {
  static async allProducts(req, res) {
    const products = await Products.findAll({ raw: true });
    res.render("products/allProducts", { products });
  }
};
