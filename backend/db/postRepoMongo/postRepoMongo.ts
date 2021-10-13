import { DbInstance, PostRepoStruct, PostsDataDTO } from '../interfaces/post-repo';
import { connectToDb } from './utils/connectToDb';
import { omit, takeLast } from '../../../utils';
import { POSTS_PAGE_SIZE } from '../../../config/constants';
import { ObjectId } from 'mongodb';
import { FullPostDTO, PostPreviewDTO } from '../../../contracts/PostDTO';
import { HashTagDTO } from '../../../contracts/HashTagDTO';

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

    if (!post.tags) {
      post.tags = [];
    }

    return post;
  };

  private _checkHasMore = (count: number, loadedCount: number): boolean => {
    return loadedCount !== count;
  };

  private _getLastId = (postDocuments: Document[]): string | undefined => {
    const lastPost = takeLast(postDocuments);

    return lastPost ? lastPost._id.toHexString() : undefined;
  };

  public getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    const { db } = await this._connect();

    const post = await db.collection('posts').findOne({ slug: slug });

    if (!post) {
      return undefined;
    }

    return this._normalizePost<FullPostDTO>(post, ['_id']);
  };

  public getAll = async (loadedCount = 0, lastId?: string): Promise<PostsDataDTO> => {
    const { db } = await this._connect();

    const objectId = new ObjectId(lastId);

    const filter = lastId ? { _id: { $gt: objectId } } : {};

    const options = { projection: { content: 0 } };

    const cursor = await db.collection('posts').find(filter, options).limit(POSTS_PAGE_SIZE);

    const total = await db.collection('posts').countDocuments();

    const count = await cursor.count();

    const newLoadedCount = loadedCount + count;

    if (count === 0) {
      await cursor.close();

      return {
        posts: [],
        loadedCount,
      };
    }

    const rawPosts = await cursor.toArray();

    const newLastId = this._getLastId(rawPosts);

    await cursor.close();

    const posts = rawPosts.map((post) => this._normalizePost<PostPreviewDTO>(post, ['_id']));

    const result: PostsDataDTO = {
      posts,
      loadedCount: newLoadedCount,
      hasMore: this._checkHasMore(total, newLoadedCount),
    };

    if (newLastId) {
      result.lastId = newLastId;
    }

    return result;
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
