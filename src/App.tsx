import "./App.css";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import Slider from "@/components/silder.tsx";
import Post from "@/components/post.tsx";
import postSlide1 from "./assets/img/post-slide-1.jpg";
import postSlide2 from "./assets/img/post-slide-2.jpg";
import postLandscape1 from "./assets/img/post-landscape-1.jpg";

function App() {
  const sliderPosts: Post[] = [
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

  const culturePosts: Post[] = [
    {
      title: "11 Work From Home Part-Time Jobs You Can Do Now",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      image: postLandscape1,
      link: "#",
      meta: { date: "Jul 5th '22", category: "Culture" },
      author: "Cameron Williamson",
    },
    {
      title:
        "17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.",
      image: postLandscape1,
      link: "#",
      meta: { date: "Jul 5th '22", category: "Culture" },
      author: "Cameron Williamson",
    },
  ];

  return (
    <>
      <Header />
      <main className="main">
        <Slider posts={sliderPosts} />
        <Post title="Culture" posts={culturePosts} seeAllLink="#" />
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </>
  );
}

export default App;
