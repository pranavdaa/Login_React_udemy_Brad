const express = require("express");

const router = express.Router();

// ' /' will be automatically be redirected to /router/api  as
router.get("/", (req, res) => {
  res.send("Get logged in User");
});

router.post("/", (req, res) => {
  res.send("Log in User");
});

module.exports = router;
