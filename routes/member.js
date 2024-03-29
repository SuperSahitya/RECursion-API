const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/memberController");

router.get("/:year", async (req, res) => {
  try {
    const year = parseInt(req.params.year, 10);
    const data = await getData(year);
    res.send(data);
    // console.log(data);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving data" });
  }
});

module.exports = router;
