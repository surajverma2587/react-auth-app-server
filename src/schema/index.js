const { gql } = require("apollo-server");

const typeDefs = gql`
  type Auth {
    token: ID!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [String]
  }

  type Mutation {
    login(input: LoginInput!): Auth!
    signup(input: SignupInput!): Auth!
  }
`;

module.exports = typeDefs;
