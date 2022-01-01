import Head from 'next/head';

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

      <main>{children}</main>
    </>
  );
};
