var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shopping",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE images(Detail_ID INTEGER  NOT NULL  ,imgID     INTEGER  NOT NULL PRIMARY KEY,url       VARCHAR(1000) NOT NULL ,createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
