import postSlide1 from "../assets/img/post-slide-1.jpg";
import postSlide2 from "../assets/img/post-slide-2.jpg";
import postLandScape1 from "../assets/img/post-landscape-1.jpg";
import person1 from "../assets/img/person-1.jpg";
import postLandScape2 from "../assets/img/post-landscape-2.jpg";
import person2 from "../assets/img/person-2.jpg";
import postLandScape3 from "../assets/img/post-landscape-3.jpg";
import person4 from "../assets/img/person-4.jpg";
// import postLandScape4 from "../assets/img/post-landscape-4.jpg";
// import person4 from "../assets/img/person-4.jpg";
import postLandScape5 from "../assets/img/post-landscape-5.jpg";
// import person5 from "../assets/img/person-5.jpg";
import postLandScape6 from "../assets/img/post-landscape-6.jpg";
// import postLandScape7 from "../assets/img/post-landscape-7.jpg";
import postLandScape8 from "../assets/img/post-landscape-8.jpg";

const sliderPosts: Slider[] = [
  {
    title: "The Best Homemade Masks for Face (keep the Pimples Away)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia!\nBeatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque\nmaxime inventore repudiandae quidem necessitatibus rem atque.",
    image: postSlide1,
    link: "#",
    meta: { date: "Jul 5th '22", category: "Beauty" },
    author: "Jane Cooper",
  },
  {
    title:
      "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia!\nBeatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque\nmaxime inventore repudiandae quidem necessitatibus rem atque.",
    image: postSlide2,
    link: "#",
    meta: { date: "Jul 5th '22", category: "Beauty" },
    author: "Jane Cooper",
  },
  // Add more slider posts here
];

const trendingPosts: Post[] = [
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title: "11 Work From Home Part-Time Jobs You Can Do Now",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem?",
    image: postLandScape1,
    author: { name: "Cameron Williamson", image: person1 },
    link: "blog-details.html",
  },
  {
    id: 2,
    category: "Sport",
    date: "Jul 5th '22",
    title: "Let’s Get Back to Work, New York",
    image: postLandScape2,
    link: "blog-details.html",
  },
  {
    id: 3,
    category: "Food",
    date: "Jul 17th '22",
    title: "How to Avoid Distraction and Stay Focused During Video Calls?",
    image: postLandScape5,
    link: "blog-details.html",
  },
  {
    id: 4,
    category: "Business",
    date: "Jul 5th '22",
    title: "6 Easy Steps To Create Your Own Cute Merch For Instagram",
    image: postLandScape3,
    link: "blog-details.html",
  },
  {
    id: 5,
    category: "Tech",
    date: "Mar 1st '22",
    title: "10 Life-Changing Hacks Every Working Mom Should Know",
    image: postLandScape6,
    link: "blog-details.html",
  },
  {
    id: 6,
    category: "Travel",
    date: "Jul 5th '22",
    title: "5 Great Startup Tips for Female Founders",
    image: postLandScape8,
    link: "blog-details.html",
  },
];
const trendingSidePosts: Post[] = [
  {
    id: 1,
    title: "The Best Homemade Masks for Face (keep the Pimples Away)",
    author: { name: "Jane Cooper", image: person1 },
    link: "blog-details.html",
    category: "Culture",
    date: "Jul 5th '22",
    image: postLandScape1,
  },
  {
    id: 2,
    title:
      "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
    author: { name: "Wade Warren", image: person2 },
    link: "blog-details.html",
    category: "Culture",
    date: "Jul 5th '22",
    image: postLandScape1,
  },
  {
    id: 3,
    title: "13 Amazing Poems from Shel Silverstein with Valuable Life Lessons",
    author: { name: "Esther Howard", image: person4 },
    link: "blog-details.html",
    category: "Culture",
    date: "Jul 5th '22",
    image: postLandScape1,
  },
];

const culturePosts: Post[] = [
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title: "11 Work From Home Part-Time Jobs You Can Do Now",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus",
    image: postLandScape1,
    author: { name: "Jenny Wilson", image: person1 },
    link: "blog-details.html",
  },
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title: "How to Avoid Distraction and Stay Focused During Video Calls?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus",
    image: postLandScape2,
    author: { name: "Jenny Wilson", image: person1 },
    link: "blog-details.html",
  },
];

const cultureSidePosts: Post[] = [
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title:
      "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
    author: { name: "Jenny Wilson", image: person1 },
    image: postLandScape2,
    link: "blog-details.html",
  },
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title: "9 Half-up/half-down Hairstyles for Long and Medium Hair",
    author: { name: "Jenny Wilson", image: person1 },
    image: postLandScape2,
    link: "blog-details.html",
  },
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title: "Life Insurance And Pregnancy: A Working Mom’s Guide",
    author: { name: "Jenny Wilson", image: person1 },
    image: postLandScape2,
    link: "blog-details.html",
  },
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title: "The Best Homemade Masks for Face (keep the Pimples Away)",
    author: { name: "Jenny Wilson", image: person1 },
    image: postLandScape2,
    link: "blog-details.html",
  },
  {
    id: 1,
    category: "Culture",
    date: "Jul 5th '22",
    title: "10 Life-Changing Hacks Every Working Mom Should Know",
    author: { name: "Jenny Wilson", image: person1 },
    image: postLandScape2,
    link: "blog-details.html",
  },
];

export {
  sliderPosts,
  trendingPosts,
  trendingSidePosts,
  culturePosts,
  cultureSidePosts,
};
