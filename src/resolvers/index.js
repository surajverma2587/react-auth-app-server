const login = require("./login");
const signup = require("./signup");

const resolvers = {
  Mutation: {
    login,
    signup,
  },
};

module.exports = resolvers;
