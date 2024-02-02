import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { hello } from '../../../../api/resolvers/resolvers';
import { gql } from 'graphql-tag';

const resolvers = {
  Query: {
    hello: hello,
  },
};

const typeDefs = gql`
  type Query {
    hello: String 
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handlers = startServerAndCreateNextHandler(server);
export { handlers as GET, handlers as POST }