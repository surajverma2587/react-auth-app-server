const { ApolloError } = require("apollo-server");

const { User } = require("../models");
const { signToken } = require("../utils/auth");

const signup = async (_, { input }) => {
  try {
    const user = await User.create(input);

    return {
      token: signToken(user),
    };
  } catch (error) {
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    throw new ApolloError("Failed to sign up");
  }
};

module.exports = signup;
