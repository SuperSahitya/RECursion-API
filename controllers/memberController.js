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
    throw error;
  } finally {
    await client.close();
  }
}

module.exports = {
  getData, 
};
