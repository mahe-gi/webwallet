const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const router = express.Router();

const signupZodSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(4).max(30),
  firstname: zod.string(),
  lastname: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupZodSchema.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const existingUser = await User.findOne({
    username: body.username,
  });
  if (existingUser) {
    return res.json({
      message: "Email already taken ",
    });
  }
  const user = await User.create({
    username: body.username,
    password: body.password,
    firstname: body.firstname,
    lastname: body.lastname,
  });

  const userId = user._id;

  const token = jwt.sign({ userId }, JWT_SECRET);

  res.status(200).send({
    message: "User created successfully",
    //sending back token when signup
    token: token,
  });
});
//sign in route starts from here
const signinZodSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  const { success } = signinZodSchema.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }

  const existingUser = await User.findOne({
    username: body.username,
    password: body.password,
  });

  if (existingUser) {
    const token = jwt.sign(
      {
        userId: existingUser._id,
      },
      JWT_SECRET
    );

    res.status(200).json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in last",
  });
});

module.exports = router;
