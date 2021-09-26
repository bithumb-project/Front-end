import type { AppProps } from 'next/app';
import GlobalStyles from '../../styles/GlobalStyles';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
export default MyApp;
