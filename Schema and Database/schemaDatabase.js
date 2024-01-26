const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/recursion2")
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.error("error", e);
  });

const memberSchema = new mongoose.Schema({
  name: String,
  role: String,
  linkedin: String,
  facebook: String,
  phone: Number,
  image: String,
  year: Number,
});

const Collection = mongoose.model("member", memberSchema);

async function createDatabase() {
  try {
    const members = [
      {
        name: "Akshay A Baiju",
        role: "President",
        facebook: "https://www.facebook.com/akshay.abaiju.92754",
        linkedin: "https://www.linkedin.com/in/akshay-a-69211210b/",
        phone: 9475738842,
        image: "/Akshay_A_Baiju.png",
        year: 2024,
      },
      {
        name: "Varandeep Sahota",
        role: "Convener",
        facebook: "https://www.facebook.com/varandeep.sahota/",
        linkedin: "https://www.linkedin.com/in/varandeep-sahota-12a054208/",
        phone: 9024328063,
        image: "/Varandeep_Sahota.png",
        year: 2024,
      },
      {
        name: "Rick Sarkar",
        role: "Treasurer",
        facebook: "https://www.facebook.com/rick.sarkar.9465",
        linkedin: "https://www.linkedin.com/in/rick-sarkar-791050229",
        phone: 8016814706,
        image: "/Rick_Sarkar.png",
        year: 2024,
      },
      {
        name: "D. Mahamood Sameer",
        role: "Vice President",
        facebook: "https://www.facebook.com/dudekula.mahamoodsameer",
        linkedin:
          "https://www.linkedin.com/in/dudekula-mahamood-sameer-7b8ab1219",
        phone: 9390627070,
        image: "/D.Mahamood_Sameer.png",
        year: 2024,
      },
      {
        name: "Prashant Shukla",
        role: "General Secretary",
        facebook: "https://www.facebook.com/prashant.shukla.12979",
        linkedin: "https://www.linkedin.com/in/prashant-shukla-6aa9441bb/",
        phone: 8077012522,
        image: "/Prashant_Shukla.png",
        year: 2024,
      },
    ];
  
    const result = await Collection.insertMany(members);
    console.log(result);
  } finally {
    mongoose.connection.close();
  }
}

createDatabase();
