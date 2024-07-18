const express = require("express");
const userRouter = require("../routes/user");

const router = express().router();

router.use("/user", userRouter);

module.exports = {
  router,
};
