import { HashTagDTO } from '../../common/contracts/HashTagDTO';

export type GetTagsMethod = () => Promise<HashTagDTO[]>;

export interface IHashTagService {
  getTags: GetTagsMethod;
}
