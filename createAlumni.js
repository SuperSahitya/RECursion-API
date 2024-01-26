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
  department: String,
  linkedin: String,
  image: String,
  year: Number,
});

const Collection = mongoose.model("alumni", memberSchema);

async function createDatabase() {
  try {
    const alumni = [
      {
        name: "Abhinav Aarya",
        department: "B.Tech. in Computer Science",
        linkedin: "https://www.linkedin.com/in/abhinav-aarya-782328128/",
        image: "/Abhinav_Aarya.png",
        year: 2023,
      },
      {
        name: "Aishik Bhattacharya",
        department: "B.Tech. in Computer Science",
        linkedin: "https://www.linkedin.com/in/aishikbhattacharya",
        image: "/Aishik_Bhattacharya.png",
        year: 2023,
      },
      {
        name: "Aishwarya Prakash",
        department: "B.Tech. in Electrical Engineering",
        linkedin: "https://www.linkedin.com/in/aishwaryaprakash2903",
        image: "/Aishwarya_Prakash.png",
        year: 2023,
      },
      {
        name: "Ankit Maskara",
        department: "B.Tech. in Computer Science",
        linkedin: "https://www.linkedin.com/in/ankit-m-61b35b11b/",
        image: "/Ankit_Maskara.png",
        year: 2023,
      },
      {
        name: "Ankita Singh",
        department: "B.Tech. in Computer Science",
        linkedin: "http://linkedin.com/in/ankita-singh-0b0238202",
        image: "Ankita_Singh.png",
        year: 2023,
      },
    ];

    const result = await Collection.insertMany(alumni);
    console.log(result);
  } finally {
    mongoose.connection.close();
  }
}

createDatabase();
