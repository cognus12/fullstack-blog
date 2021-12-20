import { ApolloServer } from 'apollo-server-micro';
import { getConfig } from '../common/config/config.service';
import { schema } from './schema/schema';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';
import { IDataService } from './data/data.service.interface';

export type Handler = (req: MicroRequest, res: ServerResponse) => Promise<void>;

export class App {
  private readonly dataLoader: IDataService;

  constructor(dataLoader: IDataService) {
    this.dataLoader = dataLoader;
  }

  public createHandler = async (): Promise<Handler> => {
    const server = new ApolloServer({
      schema: schema,
      context: () => ({
        dataLoader: this.dataLoader,
      }),
    });
    await server.start();

    const path = getConfig('GRAPHQL_PATH');

    if (!path) {
      throw new Error('[GraphQLServer]: NEXT_PUBLIC_GRAPHQL_PATH is not specified in .env.local');
    }

    return server.createHandler({ path });
  };
}
