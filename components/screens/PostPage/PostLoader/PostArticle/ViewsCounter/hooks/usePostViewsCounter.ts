import React from 'react';
import { useSlug } from '../../../../../../../hooks';
import { useMutationIncPostViews } from '../../../../../../../apollo/hooks/useMutationIncPostViews';
import { useQueryPostPartials } from '../../../../../../../apollo';

export const usePostViewsCounter = (): void => {
  const slug = useSlug();
  const { incViews } = useMutationIncPostViews();
  const { id } = useQueryPostPartials({ slug, fields: ['id'] });

  React.useEffect(() => {
    incViews({ variables: { id } });
  }, [id]);
};
