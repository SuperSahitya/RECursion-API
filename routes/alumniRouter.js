const express = require("express");
const router = express.Router();
const { getAlumni } = require("../controllers/alumniController");

router.get("/", async (req, res) => {
  try {
    const data = await getAlumni();
    res.send(data);
    // console.log(data);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving data" });
  }
});

module.exports = router;
