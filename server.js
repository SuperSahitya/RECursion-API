const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());

async function getData() {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const db = client.db("recursion");
    const collection = db.collection("member");
    const cursor = await collection.find({});
    const result = await cursor.toArray();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}


app.get("/members", async (req, res) => {
  try {
    const data = await getData();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving data" });
  }
});

app.listen(8000, () => {
  console.log("listening at http://localhost:8000/members");
});
