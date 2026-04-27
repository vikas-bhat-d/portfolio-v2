export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type Blog = BlogMeta & {
  content: string;
};
