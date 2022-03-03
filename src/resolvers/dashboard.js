const { ApolloError, AuthenticationError } = require("apollo-server");

const { User } = require("../models");

const dashboard = async (_, __, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError("Unauthorised to perform this operation");
    }

    const user = await User.findById(context.user.id);

    return user;
  } catch (error) {
    console.log(`[ERROR]: Failed to get dashboard | ${error.message}`);
    throw new ApolloError("Failed to get dashboard");
  }
};

module.exports = dashboard;
