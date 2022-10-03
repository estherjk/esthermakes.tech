import { useRouter } from 'next/router';

import { getAllPosts, getPost } from '@src/api/markdown';
import PostLayout from '@src/layouts/PostLayout';
import { Post } from '@src/types';

type Props = {
  post: Post;
};

const PostPage = (props: Props) => {
  const { post } = props;

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <div>Page not found.</div>;
  }

  return <PostLayout post={post} />;
};

export default PostPage;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getPost(params.slug, [
    'slug',
    'title',
    'description',
    'image',
    'dateCreated',
    'content',
  ]);

  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
