import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typeDefs';

export const clientSchema = makeExecutableSchema({
  typeDefs,
});
