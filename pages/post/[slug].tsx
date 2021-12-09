import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { queryInitialApolloState } from '../../core/graphql-client';
import { QUERY_POST_PAGE_DATA } from '../../core/graphql-client';

import { FullPostDTO } from '../../common/contracts/PostDTO';

import { PostPage } from '../../components/pages/PostPage';

interface PostPageProps {}

interface FullPostData {
  post: FullPostDTO;
}
interface FullPostQueryVars {
  slug: string | string[] | undefined;
}

export const getServerSideProps: GetServerSideProps<PostPageProps> = async ({ params = {} }) => {
  const { slug } = params;

  const { data, initialApolloState } = await queryInitialApolloState<FullPostData, FullPostQueryVars>({
    query: QUERY_POST_PAGE_DATA,
    variables: { slug },
  });

  if (!data.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialApolloState,
    },
  };
};

const Post: NextPage<PostPageProps> = () => <PostPage />;

export default Post;
