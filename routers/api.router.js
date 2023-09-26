const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", async (req, res) => {
  const result = await db.query(`SELECT * from students;`);
  console.log(result);
  return res.status(200).json(result);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await db.query(`SELECT * from students where id = ?;`, [id]);
  console.log(result);
  if (!result.length) {
    return res.status(404).send("user is not found");
  }
  return res.status(200).json(result[0]);
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, phoneNumber } = req.body;
  await db.query(
    "INSERT INTO `demo`.`students` (`first_name`, `last_name`, `email`, `phone_number`) VALUES (?,?,?,?);",
    [firstName, lastName, email, phoneNumber]
  );
  return res.status(200).send("Add students Successfully!");
});

router.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const result = await db.query(`SELECT * from students where id = ?;`, [id]);

  if (!result.length) {
    return res.status(404).send("user is not found");
  }

  const { firstName, lastName, email, phoneNumber } = req.body;
  await db.query(
    "UPDATE `demo`.`students` SET `first_name` = ?, `last_name` = ?, `email` = ?, `phone_number` = ? WHERE `id` = ?;",
    [firstName, lastName, email, phoneNumber, id]
  );
  return res.status(200).send("Edit students Successfully!");
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await db.query(`SELECT * from students where id = ?;`, [id]);
  if (!result.length) {
    return res.status(404).send("user is not found");
  }
  await db.query("DELETE FROM `demo`.`students` WHERE `id` = ?;", [id]);
  return res.status(200).send("Delete students Successfully!");
});

module.exports = router;
