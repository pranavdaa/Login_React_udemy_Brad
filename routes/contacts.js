const express = require("express");

const router = express.Router();

// ' /' will be automatically be redirected to /router/api  as
router.get("/", (req, res) => {
  res.send("geting user contacts");
});

router.post("/", (req, res) => {
  res.send("Add contact");
});

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
