const express = require("express");
const router = express.Router();
var path = require("path");

router.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/about", function (req, res) {
  return res.sendFile(path.join(__dirname, "../views/about.html"));
});

module.exports = router;
