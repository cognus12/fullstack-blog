import { NextApiRequest, NextApiResponse } from 'next';
import { app } from '../../backend/main';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const handler = await app.createHandler();
  return handler(req, res);
};
