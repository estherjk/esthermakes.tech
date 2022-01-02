import { Title } from '@src/components/Typography';
import { BaseLayout } from '@src/layouts';

const BlogPage = () => {
  return (
    <BaseLayout title="About" image="/images/headshot.jpg">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-8">
          <Title>Blog Posts</Title>
        </div>
      </div>
    </BaseLayout>
  );
};

export default BlogPage;
