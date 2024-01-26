const { MongoClient } = require("mongodb");

async function createDatabase() {
  const client = new MongoClient("mongodb://localhost:27017");

  try {
    await client.connect();
    const database = client.db("recursion");
    const collection = database.collection("member");
    const result = await collection.insertMany([
      {
        name: "Akshay A Baiju",
        role: "President",
        facebook: "https://www.facebook.com/akshay.abaiju.92754",
        linkedin: "https://www.linkedin.com/in/akshay-a-69211210b/",
        phone: 9475738842,
        image: "/Akshay_A_Baiju.png",
      },
      {
        name: "Varandeep Sahota",
        role: "Convener",
        facebook: "https://www.facebook.com/varandeep.sahota/",
        linkedin: "https://www.linkedin.com/in/varandeep-sahota-12a054208/",
        phone: 9024328063,
        image: "/Varandeep_Sahota.png",
      },
      {
        name: "Rick Sarkar",
        role: "Treasurer",
        facebook: "https://www.facebook.com/rick.sarkar.9465",
        linkedin: "https://www.linkedin.com/in/rick-sarkar-791050229",
        phone: 8016814706,
        image: "/Rick_Sarkar.png",
      },
      {
        name: "D. Mahamood Sameer",
        role: "Vice President",
        facebook: "https://www.facebook.com/dudekula.mahamoodsameer",
        linkedin:
          "https://www.linkedin.com/in/dudekula-mahamood-sameer-7b8ab1219",
        phone: 9390627070,
        image: "/D.Mahamood_Sameer.png",
      },
      {
        name: "Prashant Shukla",
        role: "General Secretary",
        facebook: "https://www.facebook.com/prashant.shukla.12979",
        linkedin: "https://www.linkedin.com/in/prashant-shukla-6aa9441bb/",
        phone: 8077012522,
        image: "/Prashant_Shukla.png",
      },
    ]);

    console.log("Database and collection created successfully");
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

createDatabase();
