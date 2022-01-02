import { getAllPosts } from '@src/api/markdown';
import { Title } from '@src/components/Typography';
import { BaseLayout } from '@src/layouts';
import { Post } from '@src/types';
import { formatDate } from '@src/util';

type Props = {
  posts: Post[];
};

const BlogPage = (props: Props) => {
  const { posts } = props;

  return (
    <BaseLayout title="About" image="/images/headshot.jpg">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-8">
          <Title>Blog Posts</Title>
        </div>

        <table className="min-w-full">
          <tbody>
            {posts.map((post) => (
              <tr key={post.slug} className="border-b">
                <td className="py-4 text-left">{post.title}</td>
                <td className="py-4 text-right">{formatDate(post.dateCreated)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
};

export default BlogPage;

// Use Next.js static generation to get posts at build time
// See: https://nextjs.org/docs/basic-features/data-fetching
export const getStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title', 'dateCreated']);

  return {
    props: { posts },
  };
};
