import type { AppProps } from 'next/app';
import { StylesProvider } from '@mui/styles';
import GlobalStyles from '../../styles/GlobalStyles';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
