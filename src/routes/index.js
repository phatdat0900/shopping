const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shopping",
});

app.post("/Register", (req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users(name,mail,username,password) VALUES (?,?,?,?)",
    [fullname, email, username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/Login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ Message: "wrong username or password" });
      }
    }
  );
});

app.listen(port, () =>
  console.log("Example app listening at http:// localhost:${port}")
);
