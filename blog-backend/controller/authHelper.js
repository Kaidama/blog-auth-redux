const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function newToken(user) {
  const { id, email, username } = user;
  let payload = {
    id,
    email,
    username
  };

  let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "1hr"
  });
  return jwtToken;
}

async function hashPassword(password) {
  let genSalt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, genSalt);
  return hashedPassword;
}
async function userExists(user) {
  const { email } = user;
  let userExists = await User.findOne({ email });
  if (!userExists) return 404;
  return userExists;
}
async function createUser(user) {
  const { username, email, password, gender } = user;
  let newUser = await new User({
    username,
    email,
    password,
    gender
  });
  return newUser;
}

async function errorHandler(error) {
  let errorMessage = null;
  if (error.errmsg.includes("email_1")) {
    errorMessage = "Email Already Exist! Try another one.";
  } else if (error.errmsg.includes("username_1")) {
    errorMessage = "Username Already Exist! Try another one.";
  }
  return {
    status: 409,
    message: errorMessage
  };
}

async function checkPassword(user) {
  const { password } = user;
  let hashedPassword = user.password;
  let isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

module.exports = {
  hashPassword,
  errorHandler,
  createUser,
  checkPassword,
  userExists,
  newToken
};
