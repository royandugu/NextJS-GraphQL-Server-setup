import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import resolvers from '../../../../api/resolvers/resolverLists';
import typeDefs from '../../../../api/schema/schema';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handlers = startServerAndCreateNextHandler(server);
export { handlers as GET, handlers as POST }