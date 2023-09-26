const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./routers/views.router"));
app.use("/api/student", require("./routers/api.router"));
app.use("/api/dht", require("./routers/dht.router"));
app.use("/student", require("./routers/student.router"));

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});

