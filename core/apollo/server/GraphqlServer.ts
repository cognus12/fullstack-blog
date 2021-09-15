import { ApolloServer } from 'apollo-server-micro';
import { ServerResponse } from 'http';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';
import { GRAPHQL_PATH } from '../../config/constants';

type Handler = (req: MicroRequest, res: ServerResponse) => Promise<void>;

class GraphQLSever {
  public createHandler = async (): Promise<Handler> => {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    return server.createHandler({ path: GRAPHQL_PATH });
  };
}

export const graphQLServer = new GraphQLSever();
