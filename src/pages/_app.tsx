import type { AppProps } from 'next/app';
import { StylesProvider } from '@mui/styles';
import GlobalStyles from '../../styles/GlobalStyles';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
      <GlobalStyles />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </StylesProvider>
  );
}
export default MyApp;
