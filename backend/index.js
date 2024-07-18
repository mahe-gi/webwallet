const express = require("express");
const MainRouter = require("./routes/index");
const app = express();
var cors = require("cors");
const PORT = 3000;

app.use(cors());
app.use(express.json());
//   Express router instance.
const router = express().router();

router.use("/api/v1", MainRouter);

app.use(router);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
