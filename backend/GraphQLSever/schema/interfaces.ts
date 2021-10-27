import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';
import { PostService } from '../../services/PostService';

export type Handler = (req: MicroRequest, res: ServerResponse) => Promise<void>;

export interface GraphQLSeverContext {
  postService: PostService;
}
