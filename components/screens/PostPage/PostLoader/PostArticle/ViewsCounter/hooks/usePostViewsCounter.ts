import React from 'react';
import { useSlug } from '../../../../../../../hooks';
import { useMutationIncPostViews } from '../../../../../../../core/graphql-client/gql/hooks/useMutationIncPostViews';
import { useQueryPostPartials } from '../../../../../../../core/graphql-client';

export const usePostViewsCounter = (): void => {
  const slug = useSlug();
  const { incViews } = useMutationIncPostViews();
  const { id } = useQueryPostPartials({ slug, fields: ['id'] });

  React.useEffect(() => {
    incViews({ variables: { id } });
  }, [id]);
};
