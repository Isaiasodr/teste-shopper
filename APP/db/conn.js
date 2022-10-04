const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("market", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  console.log("conectou ao banco de dados");
} catch (error) {
  console.log("não foi possível conectar" + error);
}

module.exports = sequelize;
