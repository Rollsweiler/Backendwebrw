var createError = require("http-errors");
var express = require("express");
var router = express.Router();
const RequestVipClient = require("../models/RequestVipClient");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/registro", async (req, res, next) => {
  try {
    const { name, email, phone, birthdate, direction, dni, favoriteProduct } =
      req.body;
    const item = new RequestVipClient({
      name,
      email,
      phone,
      birthdate,
      direction,
      dni,
      favoriteProduct,
    });
    await item.save();
    res.json({ error: false });
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
});

module.exports = router;
