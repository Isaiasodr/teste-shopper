const express = require("express");
const app = express();
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const flash = require("express-flash");
const exphbs = require("express-handlebars");
const productsRoute = require("./routes/productsRoute");
const requestRoute = require("./routes/requestRoute");
const authRoute = require("./routes/authRoute");
const conn = require("./db/conn");
const Product = require("./models/Products");
const Cart = require("./models/Cart");
const User = require("./models/User");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
      logFn: function () {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),

    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httponly: true,
    },
  })
);
// flash messages
app.use(flash());

//set session to res
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }
  next();
});
app.use(express.static(__dirname + "/public"));

/* routes */
app.use("/", productsRoute);
app.use("/", requestRoute);
app.use("/", authRoute);

/* app.get("/", (req, res) => {
  res.render("home");
}); */

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => console.log(error));
