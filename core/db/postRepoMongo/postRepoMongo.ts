import { DbInstance, FullPostDTO, PostPreviewDTO, PostRepoStruct, PostsDataDTO } from '../interfaces/post';
import { connectToDb } from './utils/connectToDb';
import { omit, takeLast } from '../../../utils';
import { POSTS_PAGE_SIZE } from '../../config/constants';
import { ObjectId } from 'mongodb';

interface Document {
  [key: string]: any;
}

export class PostRepoMongo implements PostRepoStruct {
  private _connect = async (): Promise<DbInstance> => {
    return await connectToDb();
  };

  private _normalizePost = <T extends Partial<FullPostDTO>>(postDocument: Document, exclude: string[]): T => {
    const post = omit(postDocument, exclude) as T;
    post.id = postDocument._id.toHexString();

    return post;
  };

  getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    const { db } = await this._connect();

    const post = await db.collection('posts').findOne({ slug: slug });

    if (!post) {
      return undefined;
    }

    return this._normalizePost<FullPostDTO>(post, ['_id']);
  };

  getAll = async (lastId?: string): Promise<PostsDataDTO> => {
    const { db } = await this._connect();

    const objectId = new ObjectId(lastId);

    const filter = lastId ? { _id: { $gt: objectId } } : {};

    const options = { projection: { content: 0, views: 0 } };

    const cursor = await db.collection('posts').find(filter, options).limit(POSTS_PAGE_SIZE);

    const count = await cursor.count();

    if (count === 0) {
      await cursor.close();

      return {
        posts: [],
      };
    }

    const rawPosts = await cursor.toArray();

    const lastPost = takeLast(rawPosts);

    const newLastId = lastPost ? lastPost._id.toHexString() : undefined;

    await cursor.close();

    const posts = rawPosts.map((post) => this._normalizePost<PostPreviewDTO>(post, ['_id']));

    const result: PostsDataDTO = {
      posts,
    };

    if (newLastId) {
      result.lastId = newLastId;
    }

    return result;
  };
}
