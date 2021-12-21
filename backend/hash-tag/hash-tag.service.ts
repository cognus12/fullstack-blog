import { IHashTagServie } from './hash-tag.service.interface';
import { GetTagsMethod } from '../post/post.service';

import { IHashTagRepository } from './hash-tag.repository.interface';

export class HashTagService implements IHashTagServie {
  private _repository: IHashTagRepository;

  constructor(repository: IHashTagRepository) {
    this._repository = repository;
  }

  public getTags: GetTagsMethod = async () => {
    return await this._repository.getAllTags();
  };
}
