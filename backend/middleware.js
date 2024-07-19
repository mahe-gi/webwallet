const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "invalid credentials",
    });
  }
  try {
    const token = authHeader.split(" ")[1];
    const verify = jwt.verify(token, JWT_SECRET);
    req.userId = verify._id;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "something went wrong",
    });
  }
};

module.exports = {
  authMiddleware,
};
