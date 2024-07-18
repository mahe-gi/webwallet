const express = require("express");
const MainRouter = require("./routes/index");
var cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", MainRouter);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
