import "./App.css";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import Slider from "@/components/silder.tsx";
import Post from "@/components/post.tsx";
import postSlide1 from "./assets/img/post-slide-1.jpg";
import postLandscape1 from "./assets/img/post-landscape-1.jpg";

function App() {
  const sliderPosts: Post[] = [
    {
      title: "The Best Homemade Masks for Face (keep the Pimples Away)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      image: postSlide1,
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
    // Add more posts here
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
