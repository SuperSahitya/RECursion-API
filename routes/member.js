const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

async function getData(year) {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const db = client.db("recursion2");
    const collection = db.collection("members");
    const cursor = await collection.find({ year: year });
    const result = await cursor.toArray();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

router.get("/:year", async (req, res) => {
  try {
    const year = parseInt(req.params.year, 10);
    const data = await getData(year);
    // res.send(data);
    console.log(data);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving data" });
  }
});

module.exports = router;
