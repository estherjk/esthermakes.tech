import Link from 'next/link';

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
    <BaseLayout title="Blog">
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-8">
          <Title>Blog Posts</Title>
        </div>

        <table className="min-w-full">
          <tbody>
            {posts.map((post) => (
              <tr key={post.slug} className="border-b">
                <td className="py-4 text-left">
                  <Link href={`/blog/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </td>
                <td className="py-4 text-right">
                  {/* Use concise date format on small screens */}
                  <span className="hidden md:inline">{formatDate(post.dateCreated)}</span>
                  <span className="md:hidden">{formatDate(post.dateCreated, 'MM/dd/yy')}</span>
                </td>
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
