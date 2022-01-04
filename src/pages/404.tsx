import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <div className="flex flex-col min-h-screen max-w-screen-2xl mx-auto justify-center">
        <div className="flex flex-col justify-center mx-auto">
          <div className="flex items-center space-x-2">
            <span className="text-4xl text-black dark:text-white font-semibold">404</span>
            <span className="text-4xl"> | </span>
            <span className="text-base font-normal">Page not found.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
