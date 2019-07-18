const express = require("express");

const router = express.Router();

// ' /' will be automatically be redirected to /router/api  as
router.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = router;
