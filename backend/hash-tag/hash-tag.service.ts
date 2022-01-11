import { GetTagsMethod, IHashTagService } from './hash-tag.service.interface';

import { IHashTagRepository } from './hash-tag.repository.interface';

export class HashTagService implements IHashTagService {
  private _repository: IHashTagRepository;

  constructor(repository: IHashTagRepository) {
    this._repository = repository;
  }

  public getTags: GetTagsMethod = async () => {
    return await this._repository.getAll();
  };
}
