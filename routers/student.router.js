const express = require("express");
const router = express.Router();
var path = require("path");

router.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname, "../views/students/student.html"));
});

router.get("/add-from", function (req, res) {
  return res.sendFile(path.join(__dirname, "../views/students/add-from.html"));
});

router.get("/edit-from", function (req, res) {
  return res.sendFile(path.join(__dirname, "../views/students/edit-from.html"));
});

module.exports = router;
