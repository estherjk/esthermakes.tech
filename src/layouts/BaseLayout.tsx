import Head from 'next/head';

import { Footer, Navbar } from '@src/components';

interface BaseLayoutProps {
  title?: string;
  image?: string;
  children: React.ReactNode;
}

export const BaseLayout = (props: BaseLayoutProps) => {
  const { title, image = '/images/og-default.png', children } = props;
  return (
    <>
      <Head>
        <title>{title ? `${title} | Esther Makes Tech` : 'Esther Makes Tech'}</title>

        {/* Open Graph */}
        <meta content={title} property="og:title" key="og:title" />
        <meta content="https://esthermakes.tech" property="og:url" key="og:url" />
        <meta content={`https://esthermakes.tech${image}`} property="og:image" key="og:image" />

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

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQ3KH6PLYF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-EQ3KH6PLYF');
            `,
          }}
        />
      </Head>

      {/* For sticky footer */}
      <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto">
        <Navbar />
        <main className="flex flex-auto my-8 md:my-16 px-4 md:px-8">{children}</main>
        <Footer />
      </div>
    </>
  );
};
