import React from 'react';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import { queryInitialApolloState } from '../../core/graphql-client';
import { QUERY_CERTAIN_POST } from '../../core/graphql-client';
import { ParsedUrlQuery } from 'querystring';
import { FullPostDTO } from '../../contracts/PostDTO';

import { PostPage } from '../../components/pages/PostPage';

interface PostPageProps {}

interface FullPostData {
  post: FullPostDTO;
}
interface FullPostQueryVars {
  slug: string | string[] | undefined;
}

interface PostCtx extends GetServerSideProps<ParsedUrlQuery> {
  params: PostParams;
}

interface PostParams extends ParsedUrlQuery {
  id: FullPostDTO['id'];
}

export const getServerSideProps = async ({ params }: PostCtx): Promise<GetServerSidePropsResult<PostPageProps>> => {
  const { slug } = params;

  const { data, initialApolloState } = await queryInitialApolloState<FullPostData, FullPostQueryVars>({
    query: QUERY_CERTAIN_POST,
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
