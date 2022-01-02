import { BaseLayout } from '@src/layouts';

const IndexPage = () => {
  return (
    <BaseLayout>
      <div className="flex h-full">
        <div className="flex items-center mx-auto">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">Esther Makes Tech</h1>
            <p className="text-xl">Hi, I'm Esther Jun Kim. I like to make things.</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default IndexPage;
