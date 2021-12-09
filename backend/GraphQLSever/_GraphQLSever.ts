import { ApolloServer } from 'apollo-server-micro';
import { getConfig } from '../../common/config/config.service';
import { schema } from './schema/schema';
import { postService, PostService } from '../services/PostService';
import { GraphQLSeverContext, Handler } from './schema/interfaces';

export class GraphQLSever {
  private readonly _postService: PostService;

  constructor(context: GraphQLSeverContext) {
    this._postService = context.postService;
  }

  public createHandler = async (): Promise<Handler> => {
    const server = new ApolloServer({
      schema: schema,
      context: () => ({
        postService: this._postService,
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

export const graphqlServer = new GraphQLSever({ postService });
