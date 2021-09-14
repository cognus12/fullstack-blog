import { ApolloServer } from 'apollo-server-micro';
import { resolvers } from '../../core/apollo/resolvers';
import { typeDefs } from '../../core/apollo/schema';
import { NextApiRequest, NextApiResponse } from 'next';

const createHandler = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  return apolloServer.createHandler({ path: '/api/graphql' });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await createHandler();
  return apolloServerHandler(req, res);
};
