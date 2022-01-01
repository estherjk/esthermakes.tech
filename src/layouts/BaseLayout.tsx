import Head from 'next/head';

import { Footer, Navbar } from '@src/components';

interface BaseLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const BaseLayout = (props: BaseLayoutProps) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title ? `${title} | Esther Makes Tech` : 'Esther Makes Tech'}</title>

        {/* Favicons */}
        <link rel="icon" type="image/png" href="/logo/logo-circle-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/logo/logo-circle-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/logo/logo-circle-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/logo/logo-circle-128x128.png" sizes="128x128" />
        <link rel="icon" type="image/png" href="/logo/logo-circle-196x196.png" sizes="196x196" />

        {/* Apple touch icons */}
        <link rel="logo-circle-precomposed" sizes="120x120" href="/logo/logo-circle-120x120.png" />
        <link rel="logo-circle-precomposed" sizes="152x152" href="/logo/logo-circle-152x152.png" />
        <link rel="logo-circle-precomposed" sizes="167x167" href="/logo/logo-circle-167x167.png" />
        <link rel="logo-circle-precomposed" sizes="180x180" href="/logo/logo-circle-180x180.png" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"></link>
      </Head>

      {/* For sticky footer */}
      <div className="max-w-screen-2xl mx-auto flex flex-col h-screen justify-between">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
