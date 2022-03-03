const { AuthenticationError, ApolloError } = require("apollo-server");
const { User } = require("../models");

const postImage = async (_, { input }, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError("Unauthorised to perform this operation");
    }

    const user = await User.findByIdAndUpdate(
      context.user.id,
      {
        $push: {
          images: input,
        },
      },
      {
        new: true,
      }
    );

    return user;
  } catch (error) {
    console.log(`[ERROR]: Failed to post image | ${error.message}`);
    throw new ApolloError("Failed to post image");
  }
};

module.exports = postImage;
