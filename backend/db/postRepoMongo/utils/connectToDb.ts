import { Db, MongoClient } from 'mongodb';
import { DbInstance } from '../../interfaces/post-repo';

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDb(): Promise<DbInstance> {
  if (!uri) {
    throw new Error('Please define the DB_URI environment variable inside .env.local');
  }

  if (!dbName) {
    throw new Error('Please define the DB_NAME environment variable inside .env.local');
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {});

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
