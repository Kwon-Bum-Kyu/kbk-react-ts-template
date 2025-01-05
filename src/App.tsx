import "./App.css";
import Header from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import Slider from "@/components/silder.tsx";
import TrendingPost from "@/components/trendingPost.tsx";
import {
  culturePosts,
  cultureSidePosts,
  sliderPosts,
  trendingPosts,
  trendingSidePosts,
} from "@/config/post.ts";
import CulturePost from "@/components/culturePost.tsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Slider sliders={sliderPosts} />
        <TrendingPost posts={trendingPosts} sidePosts={trendingSidePosts} />
        <CulturePost posts={culturePosts} sidePosts={cultureSidePosts} />
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </>
  );
}

export default App;
