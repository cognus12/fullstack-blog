import { NextApiRequest, NextApiResponse } from 'next';
import { graphqlServer } from '../../backend/GraphQLSever';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const handler = await graphqlServer.createHandler();
  return handler(req, res);
};
