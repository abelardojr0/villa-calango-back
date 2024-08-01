// db.js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root", // substitua pelo seu usuário do MySQL
  password: "10081995Ab.", // substitua pela sua senha do MySQL
  database: "pousada",
});

const promisePool = pool.promise();

module.exports = promisePool;
