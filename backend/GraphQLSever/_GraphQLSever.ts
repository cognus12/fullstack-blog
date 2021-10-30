import { ApolloServer } from 'apollo-server-micro';
import { GRAPHQL_PATH } from '../../config/constants';
import { schema } from './schema/schema';
import { postService, PostService } from '../services/PostService';
import { GraphQLSeverContext, Handler } from './schema/interfaces';

class GraphQLSever {
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
    return server.createHandler({ path: GRAPHQL_PATH });
  };
}

export const graphqlServer = new GraphQLSever({ postService });
