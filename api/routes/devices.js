const express = require("express");
const router = express.Router();

router.get("/testing", (req, res) => {
  res.send("Hello IoT GL API from devicesssssssss.js");
});

module.exports = router;