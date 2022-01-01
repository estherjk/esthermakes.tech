import { BaseLayout } from '@src/layouts';

const IndexPage = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center px-4">
        <div className="w-fit">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">Esther Makes Tech</h1>
          <p className="text-xl">Hi, I'm Esther Jun Kim. I like to make things.</p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default IndexPage;
