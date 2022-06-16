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
    "create table Users(userID INT NOT NULL PRIMARY KEY  AUTO_INCREMENT, mail NVARCHAR(200) NOT NULL,name VARCHAR(30) NOT NULL,username VARCHAR(10) NOT NULL,password VARCHAR(500) NOT NULL,createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
