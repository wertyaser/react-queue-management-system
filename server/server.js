const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "queue_db",
});

app.get("/", (req, res) => {
  return res.json("from backend side");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM admin";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
