const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    id: ID!
    title: String!
    description: String!
    imageUrl: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    images: [Image]
  }

  type Auth {
    token: ID!
    user: User!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }

  input PostImageInput {
    title: String!
    description: String!
    imageUrl: String!
  }

  type Query {
    dashboard: User!
  }

  type Mutation {
    login(input: LoginInput!): Auth!
    signup(input: SignupInput!): Auth!
    postImage(input: PostImageInput!): User!
  }
`;

module.exports = typeDefs;
