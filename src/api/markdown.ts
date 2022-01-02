// API for fetching Markdown files & contents
// Reference: https://github.com/vercel/next.js/blob/master/examples/blog-starter/lib/api.js

import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

// Directory containing Markdown files
const postsDirectory = join(process.cwd(), '_posts');

function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

// Fetch desired post contents
// Use `fields` parameter to specify which contents to expose
export function getPost(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug;
    if (field === 'content') items[field] = content;
    if (data[field]) items[field] = data[field];
  });

  return items;
}

// Fetch all posts with desired fields
export function getAllPosts(fields: string[] = []) {
  const files = getPostFiles();

  const posts = files
    .map((file) => getPost(file, fields))
    // Sort posts by dateCreated in descending order
    .sort((post1, post2) => (post1.dateCreated > post2.dateCreated ? -1 : 1));

  return posts;
}
