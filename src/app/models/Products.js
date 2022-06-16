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
    "CREATE TABLE products( productID   INTEGER  NOT NULL PRIMARY KEY ,CateID      INTEGER  NOT NULL,rate        FLOAT NOT NULL,Price       INTEGER  NOT NULL,productName VARCHAR(35) NOT NULL,details     VARCHAR(55) NOT NULL,discount    INTEGER NOT NULL,createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
