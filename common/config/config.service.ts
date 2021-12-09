const CONFIG = {
  POSTS_PAGE_SIZE: process.env.POSTS_PAGE_SIZE || '10',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  GRAPHQL_PATH: process.env.NEXT_PUBLIC_GRAPHQL_PATH,
  MODE: process.env.MODE,
  DATA_SOURCE: process.env.DATA_SOURCE,
};

type Key = keyof typeof CONFIG;

export const getConfig = (key: Key): string | undefined => CONFIG[key];
