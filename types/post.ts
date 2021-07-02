import Author from './author'

type PostType = {
  id: number;
  slug: string;
  title: string;
  published_at: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string
  };
  content: string;
  description: string;
}

export default PostType
