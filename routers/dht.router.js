const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", async function (req, res) {
  const result = await db.query(`SELECT * from dht_sensor;`);
  console.log(result);
  return res.status(200).json(result);
});

router.post("/", async function (req, res) {
  console.log(req.body);
  const { temperature, humidity } = req.body;
  await db.query(
    "INSERT INTO `demo`.`dht_sensor` (`temperature`, `humidity`) VALUES (?,?);",
    [temperature, humidity]
  );
  return res.status(200).send("Add dth data Successfully!");
});

module.exports = router;
