const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");

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
    firstName: body.firstname,
    lastName: body.lastname,
  });

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

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
const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
