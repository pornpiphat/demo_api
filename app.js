const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routers/index.router"));
app.use("/api", require("./routers/api.router"));

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
