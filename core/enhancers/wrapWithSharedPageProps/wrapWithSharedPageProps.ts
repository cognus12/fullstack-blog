import { GetServerSideProps, GetServerSidePropsResult } from 'next';

export interface SharedPageProps {}

export const wrapWithSharedPageProps = <P extends SharedPageProps>(f: GetServerSideProps): GetServerSideProps<P> => {
  return async (ctx): Promise<GetServerSidePropsResult<P>> => {
    const pageProps = await f(ctx);

    if ((pageProps as { props: P }).props) {
      return {
        props: {
          ...(pageProps as { props: P }).props,
        },
      };
    }

    return pageProps as GetServerSidePropsResult<P>;
  };
};
