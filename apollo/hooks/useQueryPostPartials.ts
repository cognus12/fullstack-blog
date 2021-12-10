import { gql, useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { FullPostDTO } from '../../common/contracts/PostDTO';

type Field = keyof FullPostDTO;

export interface UseQueryPostPartialsOptions<F extends Field = Field> {
  slug: string | string[] | undefined;
  fields: F[];
}

type CreatePostPartialsQuery = (fields: Field[]) => DocumentNode;

type UseQueryPostPartials<F extends Field = Field> = (options: UseQueryPostPartialsOptions<F>) => Pick<FullPostDTO, F>;

const createPostPartialsQuery: CreatePostPartialsQuery = (fields) => {
  return gql`
      query($slug: String) {
          post(slug: $slug) {
              ${fields.join(' ')}
          }
      }
  `;
};

export const useQueryPostPartials: UseQueryPostPartials = ({ slug, fields }) => {
  const query = createPostPartialsQuery(fields);

  const {
    data: { post },
  } = useQuery(query, { variables: { slug }, fetchPolicy: 'cache-only' });

  return post;
};
