const { GraphQLServer } = require('graphql-yoga');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

const User = mongoose.model('User', {
    firstname: String,
    lastname: String,
    email: String,
    phoneNumber: String
});

const typeDefs = `
  type Query {
    hello(name: String): String!
    users: [User]
  }
  type User {
      id: ID!
      firstname: String!
      lastname: String!
      email: String!,
      phoneNumber: String!
  }
  type Mutation {
      createUser(firstname: String!, lastname: String!, email: String!, phoneNumber: String!): User
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    users: () => User.find()
  },
  Mutation: {
      createUser: async (_, { firstname, lastname, email, phoneNumber }) => {
        const user = new User({ firstname, lastname, email, phoneNumber });
        user.save();
        return user;
      }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

mongoose.connection.once("open", function() {
    server.start(() => console.log('Server is running on localhost:4000'))
});