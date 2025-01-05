import { FunctionComponent } from "react";

const TrendingPost: FunctionComponent<PostPros> = ({ posts, sidePosts }) => {
  return (
    <section id="trending-category" className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Section */}
          <div>
            <div className="rounded-lg bg-white shadow">
              <a href={posts[0].link}>
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="h-64 w-full rounded-t-lg object-cover"
                />
              </a>
              <div className="p-6">
                <div className="text-sm text-gray-600">
                  <span className="text-indigo-600">{posts[0].category}</span>{" "}
                  <span className="mx-2">•</span>
                  <span>{posts[0].date}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold">
                  <a href={posts[0].link} className="hover:underline">
                    {posts[0].title}
                  </a>
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                  {posts[0].description}
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src={posts[0].author?.image}
                    alt={posts[0].author?.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-3 text-sm">
                    <p className="font-semibold">{posts[0].author?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-6">
            {posts.slice(1, 5).map((post, index) => (
              <div key={index}>
                <a href={post.link}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full rounded-lg object-cover"
                  />
                </a>
                <div className="mt-3">
                  <div className="text-sm text-gray-600">
                    <span className="text-indigo-600">{post.category}</span>{" "}
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-2 text-lg font-bold">
                    <a href={post.link} className="hover:underline">
                      {post.title}
                    </a>
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Trending */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Trending</h3>
            <ul className="space-y-4">
              {sidePosts.map((post, index) => (
                <li key={index} className="border-b pb-4">
                  <a href={post.link} className="block hover:underline">
                    <div className="flex justify-between">
                      <span className="text-3xl font-bold text-gray-300">
                        {post.id}
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold">{post.title}</h4>
                        <p className="text-sm text-gray-600">
                          {post.author?.name}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPost;
