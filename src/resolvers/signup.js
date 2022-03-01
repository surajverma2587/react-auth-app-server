const { User } = require("../models");
const { signToken } = require("../utils/auth");

const signup = async (_, { input }) => {
  const user = await User.create(input);

  return {
    token: signToken(user),
  };
};

module.exports = signup;
