import type { AppProps } from 'next/app';
import { StylesProvider } from '@mui/styles';
import GlobalStyles from '../../styles/GlobalStyles';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/Theme';
import { store } from '../app/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
