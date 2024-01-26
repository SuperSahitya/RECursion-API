const express = require("express");
const cors = require("cors");
const membersRouter = require("./routes/member.js");

const app = express();
app.use(cors());

app.use("/members", membersRouter);

app.listen(8000, () => {
  console.log("listening at http://localhost:8000/members");
});
