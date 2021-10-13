import { NextApiRequest, NextApiResponse } from 'next';
import { graphQLServer } from '../../backend/graphql-server';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const handler = await graphQLServer.createHandler();
  return handler(req, res);
};
