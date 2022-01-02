import ReactMarkdown from 'react-markdown';
import remarkSlug from 'remark-slug';

import { Title } from '@src/components/Typography';
import { BaseLayout } from '@src/layouts';
import { Post } from '@src/types';

type Props = {
  post: Post;
};

const PostLayout = (props: Props) => {
  const { post } = props;

  return (
    <BaseLayout title={post.title}>
      <div className="w-full max-w-5xl mx-auto">
        <Title>{post.title}</Title>

        <ReactMarkdown remarkPlugins={[remarkSlug]}>{post.content}</ReactMarkdown>
      </div>
    </BaseLayout>
  );
};

export default PostLayout;
