import { App } from './app';
import { DataService } from './data/data.service';
import { PostService } from './post/post.service';
import { PostRepository } from './post/post.repository';
import { getConfig } from '../common/config/config.service';
import { MockDataService } from './data/mock-data.service';
import { HashTagRepository } from './hash-tag/hash-tag.repository';
import { HashTagService } from './hash-tag/hash-tag.service';

const dataSource = getConfig('DATA_SOURCE');

const postRepository = new PostRepository();
const hashTagRepository = new HashTagRepository();

const postService = new PostService(postRepository);
const hashTagService = new HashTagService(hashTagRepository);
const dataService = dataSource === 'db' ? new DataService({ postService, hashTagService }) : new MockDataService();

export const app = new App(dataService);
