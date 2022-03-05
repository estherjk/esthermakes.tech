import { AppProps } from 'next/app';

import '@fortawesome/fontawesome-pro/css/all.min.css';
import '@src/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
