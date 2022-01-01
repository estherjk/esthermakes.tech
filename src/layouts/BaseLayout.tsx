import Head from 'next/head';

import { Footer } from '@src/components';

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
      </Head>

      {/* For sticky footer */}
      <div className="flex flex-col h-screen justify-between">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
