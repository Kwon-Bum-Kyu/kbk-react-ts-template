import { FunctionComponent } from "react";

const LifeStylePost: FunctionComponent<PostPros> = ({ posts, sidePosts }) => {
  return (
    <section id="lifestyle-category" className="py-12">
      {/* Section Title */}
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between border-b pb-2">
          <h2 className="text-3xl font-bold">Lifestyle</h2>
          <a href="/categories" className="text-gray-600 hover:underline">
            See All Lifestyle
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-12 gap-6 px-4">
        {/* Left Section */}
        <div className="col-span-4">
          {/* Large Post */}
          <div className="mb-6">
            <a href={posts[0].link}>
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full rounded-md object-cover"
              />
            </a>
            <div className="mt-4">
              <div className="text-sm text-gray-500">
                {posts[0].category} <span className="mx-1">•</span>{" "}
                {posts[0].date}
              </div>
              <h2 className="mt-2 text-2xl font-bold hover:underline">
                {posts[0].title}
              </h2>
              <p className="mt-4 text-gray-600">{posts[0].description}</p>
              <div className="mt-6 flex items-center">
                <img
                  src={posts[0].author?.image}
                  alt={posts[0].author?.name}
                  className="mr-4 h-10 w-10 rounded-full object-cover"
                />
                <p className="text-sm text-gray-700">{posts[0].author?.name}</p>
              </div>
            </div>
          </div>

          {/* Small Posts */}
          <div className="space-y-6">
            {posts.slice(1, 3).map((post) => (
              <div key={post.id} className="border-b pb-4">
                <div className="text-sm text-gray-500">
                  {post.category} <span className="mx-1">•</span> {post.date}
                </div>
                <h3 className="mt-2 text-lg font-bold hover:underline">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {post.author?.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-span-4 grid grid-cols-2 gap-6">
          {posts.slice(3).map((post) => (
            <div key={post.id}>
              <a href={post.link}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-4 w-full rounded-md object-cover"
                />
              </a>
              <div className="text-sm text-gray-500">
                {post.category} <span className="mx-1">•</span> {post.date}
              </div>
              <h3 className="mt-2 text-lg font-bold hover:underline">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
        {/* Right Section */}
        <div className="col-span-4 space-y-6">
          {sidePosts.map((post) => (
            <div key={post.id} className="border-b pb-4">
              <div className="text-sm text-gray-500">
                {post.category} <span className="mx-1">•</span> {post.date}
              </div>
              <h3 className="mt-2 text-lg font-bold hover:underline">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{post.author?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeStylePost;
