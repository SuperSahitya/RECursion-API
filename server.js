const express = require("express");
const cors = require("cors");
const membersRouter = require("./routes/member.js");
const alumniRouter = require("./routes/alumniRouter.js");

const app = express();
app.use(cors());

app.use("/members", membersRouter);
app.use("/alumni", alumniRouter);

app.listen(8000, () => {
  console.log("listening at http://localhost:8000");
});
