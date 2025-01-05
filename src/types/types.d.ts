type Slider = {
  title: string;
  description?: string;
  image: string;
  link: string;
  meta: {
    date: string;
    category: string;
  };
  author: string;
};

type SliderProps = {
  title?: string;
  sliders: Slider[];
  seeAllLink?: string;
};

type Post = {
  id: number;
  category: string;
  date: string;
  title: string;
  description?: string;
  image: string;
  author?: { name: string; image: string };
  link: string;
};
type PostPros = {
  posts: Post[];
  sidePosts: Post[];
};
