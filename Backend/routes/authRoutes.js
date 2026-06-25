const express=require("express");

const {login, signup} = require("../controllers/authController");

const protect=require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get(
  "/me",
  protect,
  (req, res) => {
    res.json({
      success: true,
      userId: req.userId,
    });
  }
);

module.exports = router;