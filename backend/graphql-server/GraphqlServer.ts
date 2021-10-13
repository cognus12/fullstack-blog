import { ApolloServer } from 'apollo-server-micro';
import { ServerResponse } from 'http';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { GRAPHQL_PATH } from '../../config/constants';
import { schema } from './schema/schema';

type Handler = (req: MicroRequest, res: ServerResponse) => Promise<void>;

class GraphQLSever {
  public createHandler = async (): Promise<Handler> => {
    const server = new ApolloServer({ schema: schema });
    await server.start();
    return server.createHandler({ path: GRAPHQL_PATH });
  };
}

export const graphQLServer = new GraphQLSever();
