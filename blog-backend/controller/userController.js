const {
  createUser,
  hashPassword,
  errorHandler,
  checkPassword,
  userExists,
  newToken
} = require("./authHelper");

module.exports = {
  signup: async (req, res) => {
    try {
      let newUser = await createUser(req.body);

      let hashedPassword = await hashPassword(newUser.password);
      newUser.password = hashedPassword;
      await newUser.save();
      res.status(200).json({
        message: "Successfully signed up"
      });
    } catch (error) {
      console.log(error);
      let errorMessage = await errorHandler(error);
      return res.status(400).json({
        message: errorMessage
      });
    }
  },
  signin: async (req, res) => {
    try {
      let user = await userExists(req.body);
      if (user === 404) {
        throw {
          status: 500,
          message: "User not found, please signup"
        };
      }
      await checkPassword(req.body);

      let jwtToken = await newToken(req.body);
      res.status(200).json({ token: jwtToken });
    } catch (error) {
      console.log(error);
      res.status(error.status).json({
        message: error.message
      });
    }
  }
};
