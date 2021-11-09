import React from 'react';
import { useSlug } from '../../../../../../../core/hooks';
import { useMutationIncPostViews } from '../../../../../../../core/graphql-client/gql/hooks/useMutationIncPostViews';
import { useQueryPostId } from '../../../../../../../core/graphql-client';

export const usePostViewsCounter = (): void => {
  const slug = useSlug();
  const { incViews } = useMutationIncPostViews();
  const id = useQueryPostId({ slug });

  React.useEffect(() => {
    incViews({ variables: { id } });
  }, [id]);
};
