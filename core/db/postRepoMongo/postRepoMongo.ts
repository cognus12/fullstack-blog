import { DbInstance, FullPostDTO, PostPreviewDTO, PostRepoStruct, PostsList } from '../interfaces/post';
import { connectToDb } from './utils/connectToDb';

interface Document {
  [key: string]: any;
}

//TODO rework these functions

const normalizeFullPost = (post: Document): FullPostDTO => {
  const normalized = { ...post, id: post._id.toHexString() } as Document & FullPostDTO;

  delete normalized._id;

  return normalized;
};

const normalizePreviewPost = (post: Document): PostPreviewDTO => {
  const normalized = {} as PostPreviewDTO;

  normalized.id = post._id.toHexString();
  normalized.title = post.title;
  normalized.annotation = post.annotation;
  normalized.cover = post.cover;
  normalized.slug = post.slug;

  return normalized;
};

export class PostRepoMongo implements PostRepoStruct {
  connect = async (): Promise<DbInstance> => {
    return await connectToDb();
  };

  getAll = async (): Promise<PostsList> => {
    const { db } = await connectToDb();

    const cursor = await db
      .collection('posts')
      .find({}, { projection: { content: 0, views: 0 } })
      .limit(20);

    const count = await cursor.count();

    if (count === 0) {
      await cursor.close();

      return [];
    }

    const rawPosts = await cursor.toArray();

    await cursor.close();

    return rawPosts.map(normalizePreviewPost);
  };

  getOne = async (slug: string): Promise<FullPostDTO | undefined> => {
    const { db } = await connectToDb();

    const post = await db.collection('posts').findOne({ slug: slug });

    if (!post) {
      return undefined;
    }

    return normalizeFullPost(post);
  };
}
