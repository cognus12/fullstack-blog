import { GetAllArgs, IncrementViewsMethod, PostRepositoryBase } from '../PostRepositoryBase';
import { connectToDb } from './utils/connectToDb';
import { omit, takeLast } from '../../../common/utils';
import { getConfig } from '../../../common/config/config.service';
import { Db, Filter, FindOptions, MongoClient, ObjectId } from 'mongodb';
import { FullPostDTO, PostPreviewDTO, PostsDataDTO } from '../../../common/contracts/PostDTO';
import { HashTagDTO } from '../../../common/contracts/HashTagDTO';

export type DbInstance = {
  client: MongoClient;
  db: Db;
};

interface Document {
  [key: string]: any;
}

interface FindAllQueryOptions {
  filter: Filter<Document>;
  options?: FindOptions;
}

export class PostRepositoryMongodb extends PostRepositoryBase {
  private _connect = async (): Promise<DbInstance> => {
    return await connectToDb();
  };

  private _normalizePost = <T extends Partial<FullPostDTO>>(postDocument: Document, exclude: string[]): T => {
    const post = omit(postDocument, exclude) as T;
    post.id = postDocument._id.toHexString();

    if (!post.postDate) {
      // TODO rework types (or find another solution for adding post date)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      post.postDate = new Date(postDocument._id.getTimestamp());
    }

    if (!post.tags) {
      post.tags = [];
    }

    if (post.content) {
      post.content = this._normalizePostContent(post.content);
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

  private _strToObjectId = (stringId: string) => new ObjectId(stringId);

  // TODO move to admin panel
  private _normalizePostContent = (text?: string): string => {
    if (!text) {
      return 'No content';
    }

    if (text.includes('<script')) {
      return text.replaceAll('</script>', '&lt;/script&gt;').replaceAll('<script', '&lt;script');
    }

    return text;
  };

  private _configureGetAllQuery = (args: GetAllArgs = {}, existingFilter?: Filter<Document>): FindAllQueryOptions => {
    const { lastId, tag } = args;

    if (existingFilter && lastId) {
      const objectId = this._strToObjectId(lastId);
      existingFilter._id = { $lt: objectId };

      return {
        filter: existingFilter,
      };
    }

    const filter: Filter<Document> = {};
    const options = { projection: { content: 0 } };

    if (tag) {
      filter.tags = { $all: [`#${tag}`] };
    }

    return {
      filter,
      options,
    };
  };

  public getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    const { db } = await this._connect();

    const post = await db.collection('posts').findOne({ slug: slug });

    if (!post) {
      return undefined;
    }

    return this._normalizePost<FullPostDTO>(post, ['_id']);
  };

  public getAll = async (loadedCount = 0, args: GetAllArgs = {}): Promise<PostsDataDTO> => {
    const { db } = await this._connect();

    const { filter, options } = this._configureGetAllQuery(args);

    const cursor = db.collection('posts').find(filter, options).sort({ _id: -1 });

    const total = await cursor.count();

    const { filter: filterWithLastId } = this._configureGetAllQuery(args, filter);

    cursor.filter(filterWithLastId);

    cursor.limit(Number(getConfig('POSTS_PAGE_SIZE')));

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

  public incrementViews: IncrementViewsMethod = async (id) => {
    const { db } = await this._connect();

    const { value: post } = await db
      .collection('posts')
      .findOneAndUpdate({ _id: this._strToObjectId(id) }, { $inc: { views: 1 } }, { returnDocument: 'after' });

    return post as FullPostDTO;
  };
}
