import { ApolloServer } from 'apollo-server-micro';
import { ServerResponse } from 'http';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { GRAPHQL_PATH } from '../config/constants';
import { serverSchema } from './schema/serverSchema';

type Handler = (req: MicroRequest, res: ServerResponse) => Promise<void>;

class GraphQLSever {
  public createHandler = async (): Promise<Handler> => {
    const server = new ApolloServer({ schema: serverSchema });
    await server.start();
    return server.createHandler({ path: GRAPHQL_PATH });
  };
}

export const graphQLServer = new GraphQLSever();
