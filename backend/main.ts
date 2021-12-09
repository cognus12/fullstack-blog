import { App } from './app';
import { DataLoader } from './data.loader';
import { PostService } from './post/post.service';
import { PostRepository } from './post/post.repository';

const postRepository = new PostRepository();
const postService = new PostService(postRepository);
const dataLoader = new DataLoader({ postService });

export const app = new App(dataLoader);
