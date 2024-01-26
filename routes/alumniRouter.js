const express = require("express");
const router = express.Router();
const { getAlumni } = require("../controllers/alumniController");

router.get("/:year", async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const data = await getAlumni(year);
    res.send(data);
    // console.log(data);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving data" });
  }
});

module.exports = router;
