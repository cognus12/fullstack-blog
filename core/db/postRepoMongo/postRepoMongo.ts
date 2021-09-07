import { DbInstance, FullPostDTO, PostPreviewDTO, PostRepoStruct, PostsList } from '../interfaces/post';
import { connectToDb } from './utils/connectToDb';
import { omit } from '../../../utils';

interface Document {
  [key: string]: any;
}

const normalizePost = <T extends Partial<FullPostDTO>>(postDocument: Document, exclude: string[]): T => {
  const post = omit(postDocument, exclude) as T;
  post.id = postDocument._id.toHexString();

  return post;
};

export class PostRepoMongo implements PostRepoStruct {
  private _connect = async (): Promise<DbInstance> => {
    return await connectToDb();
  };

  getAll = async (): Promise<PostsList> => {
    const { db } = await this._connect();

    const cursor = await db
      .collection('posts')
      .find({}, { projection: { content: 0, views: 0 } })
      .limit(10);

    const count = await cursor.count();

    if (count === 0) {
      await cursor.close();

      return [];
    }

    const rawPosts = await cursor.toArray();

    await cursor.close();

    return rawPosts.map((post) => normalizePost<PostPreviewDTO>(post, ['_id']));
  };

  getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    const { db } = await this._connect();

    const post = await db.collection('posts').findOne({ slug: slug });

    if (!post) {
      return undefined;
    }

    return normalizePost<FullPostDTO>(post, ['_id']);
  };
}
