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
