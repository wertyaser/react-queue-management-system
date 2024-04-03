const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "queue_db",
});

app.get("/", (req, res) => {
  return res.json("from backend side");
});

// Endpoint to handle user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  conn.query(sql, [username, password], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
