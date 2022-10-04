const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const productsController = require("./routes/productsRoute");
const conn = require("./db/conn");
const Product = require("./models/Products");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(__dirname + "/public"));

app.use("/", productsController);

/* routes */
app.get("/", (req, res) => {
  res.render("home");
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => console.log(error));
