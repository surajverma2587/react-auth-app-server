const login = require("./login");
const signup = require("./signup");
const postImage = require("./postImage");
const dashboard = require("./dashboard");

const resolvers = {
  Query: {
    dashboard,
  },
  Mutation: {
    login,
    signup,
    postImage,
  },
};

module.exports = resolvers;
