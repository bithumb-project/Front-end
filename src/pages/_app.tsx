import type { AppProps } from 'next/app';
import Head from 'next/head';

import { StylesProvider } from '@mui/styles';
import GlobalStyles from '../styles/GlobalStyles';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/Theme';
import { store } from '../app/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <title>BITHUMBUP</title>
        <meta name='description' content='가상화폐 커뮤니티' />
        <meta property='og:title' content='BITHUMBUP' />
        <meta property='og:description' content='가상화폐 커뮤니티' />
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyles />
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </Provider>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}
export default MyApp;
