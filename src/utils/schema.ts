import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
