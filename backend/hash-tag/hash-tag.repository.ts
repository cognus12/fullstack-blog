import { IHashTagRepository } from './hash-tag.repository.interface';
import { connectToDb, DbInstance } from '../mongodb/mongodb.service';
import { HashTagDTO } from '../../common/contracts/HashTagDTO';

export class HashTagRepository implements IHashTagRepository {
  private _connect = async (): Promise<DbInstance> => {
    return await connectToDb();
  };

  public getAllTags = async (): Promise<HashTagDTO[]> => {
    const { db } = await this._connect();

    const cursor = await db.collection('tags').find({});

    const count = await cursor.count();

    if (count === 0) {
      return [];
    }

    const tags = await cursor.toArray();

    await cursor.close();

    return tags as HashTagDTO[];
  };
}
