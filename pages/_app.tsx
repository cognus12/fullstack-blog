import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { MainLayout } from '../components/layout/MainLayout';
import { AppProps } from 'next/app';
import { useApollo } from '../core/apollo/client';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
