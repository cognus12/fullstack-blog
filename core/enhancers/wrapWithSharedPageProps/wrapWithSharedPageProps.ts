import { GetServerSideProps, GetServerSidePropsResult } from 'next';

export interface SharedPageProps {}

export const wrapWithSharedPageProps = <P extends SharedPageProps>(f: GetServerSideProps): GetServerSideProps<P> => {
  return async (ctx): Promise<GetServerSidePropsResult<P>> => {
    const result = await f(ctx);

    if ((result as { props: P }).props) {
      const sharedProps: { props: P } = result as { props: P };

      return {
        props: {
          ...sharedProps.props,
        },
      };
    }

    return result as GetServerSidePropsResult<P>;
  };
};
