const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const router = require("./src/routes/index");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("hbs", exphbs.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use("/", router);
app.listen(port, () => {
  console.log(`The server is listening on port${port}`);
});
