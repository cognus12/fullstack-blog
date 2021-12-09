import { useRouter } from 'next/router';

export const useSlug = (): string | string[] | undefined => {
  const router = useRouter();

  return router.query.slug;
};
