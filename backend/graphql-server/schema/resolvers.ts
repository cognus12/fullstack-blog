import { FullPostDTO } from '../../../contracts/PostDTO';
import { postService } from '../../services/PostService';
import { GraphQLScalarType, Kind } from 'graphql';

export interface PostsListArgs {
  lastId: FullPostDTO['id'];
  loadedCount: number;
  tag?: string;
}

export interface GetOnePostArgs {
  slug: string;
}

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.toJSON(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    // eslint-disable-next-line react/destructuring-assignment
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

export const resolvers = {
  Date: dateScalar,
  Query: {
    postsList: async (_: unknown, _args: PostsListArgs) => {
      const { lastId, loadedCount, tag } = _args;

      return await postService.getAll(loadedCount, { lastId, tag });
    },
    post: async (_: unknown, _args: GetOnePostArgs) => {
      const { slug } = _args;

      return await postService.getOne(slug as string);
    },
    allTags: async () => {
      return await postService.getAllTags();
    },
  },
};
