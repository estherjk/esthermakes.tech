export type Post = {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  dateCreated: string; // yyyy-MM-dd
  content: string;
};
