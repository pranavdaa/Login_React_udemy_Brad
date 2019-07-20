const express = require("express");

const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const authVerify = require("../middleware/auth");
const User = require("../modals/User");

// ' /' will be automatically be redirected to /router/api  as
router.post(
  "/",
  [
    check("email", "Plase enter the email").isEmail(),
    check("password", "Please enter your password").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Passwoerd" });
      }
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Server error"
      });
    }
  }
);

router.get("/", authVerify, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error);
  }
  res.status(500).send("Server Error");
});

module.exports = router;
