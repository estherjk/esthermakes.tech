import { AppProps } from 'next/app';
import { Inter, Fira_Code } from '@next/font/google';

// Use `@next/font` with Tailwind
// See: https://levelup.gitconnected.com/how-to-make-next-js-13s-optimized-fonts-work-with-tailwind-css-c3c5e57d38aa

const inter = Inter({
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
});

import '@fortawesome/fontawesome-pro/css/all.min.css';
import '@src/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-fira-code: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default App;
