type Post = {
  title: string;
  description: string;
  image: string;
  link: string;
  meta: {
    date: string;
    category: string;
  };
  author: string;
};

type SectionProps = {
  title?: string;
  posts: Post[];
  seeAllLink?: string;
};
