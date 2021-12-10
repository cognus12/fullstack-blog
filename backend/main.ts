import { App } from './app';
import { DataService } from './data/data.service';
import { PostService } from './post/post.service';
import { PostRepository } from './post/post.repository';

const postRepository = new PostRepository();
const postService = new PostService(postRepository);
const dataService = new DataService({ postService });

export const app = new App(dataService);
