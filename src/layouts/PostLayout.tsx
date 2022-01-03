import ReactMarkdown from 'react-markdown';
import remarkSlug from 'remark-slug';

import { CodeBlock, Heading2, Heading3, Image } from '@src/components/Renderers';
import { Title } from '@src/components/Typography';
import { BaseLayout } from '@src/layouts';
import { Post } from '@src/types';
import { formatDate } from '@src/util';

const components = {
  code: CodeBlock,
  h2: Heading2,
  h3: Heading3,
  img: Image,
};

type Props = {
  post: Post;
};

const PostLayout = (props: Props) => {
  const { post } = props;

  return (
    <BaseLayout title={post.title} image={post.image}>
      <div className="w-full max-w-4xl mx-auto">
        <div className="border-b mb-8">
          <Title className="mb-2">{post.title}</Title>
          <p className="text-gray-500 dark:text-gray-400">{formatDate(post.dateCreated)}</p>
        </div>

        <ReactMarkdown components={components} remarkPlugins={[remarkSlug]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </BaseLayout>
  );
};

export default PostLayout;
