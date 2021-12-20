import { App } from './app';
import { DataService } from './data/data.service';
import { PostService } from './post/post.service';
import { PostRepository } from './post/post.repository';
import { getConfig } from '../common/config/config.service';
import { MockDataService } from './data/mock-data.service';

const dataSource = getConfig('DATA_SOURCE');

const postRepository = new PostRepository();
const postService = new PostService(postRepository);
const dataService = dataSource === 'db' ? new DataService({ postService }) : new MockDataService();

export const app = new App(dataService);
