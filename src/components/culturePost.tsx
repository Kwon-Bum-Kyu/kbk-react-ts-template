import { FunctionComponent } from "react";

const CulturePost: FunctionComponent<PostPros> = ({ posts, sidePosts }) => {
  return (
    <section id="culture-category" className="py-12">
      {/* Section Title */}
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between border-b pb-2">
          <h2 className="text-3xl font-bold">Culture</h2>
          <a href="/categories" className="text-gray-600 hover:underline">
            See All Culture
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-12 gap-6 px-4">
        {/* Left Section */}
        <div className="col-span-8 grid grid-cols-12 gap-6">
          {/* Main Article */}
          <div className="col-span-8">
            <div className="grid gap-6 md:grid-cols-2">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="h-auto w-full rounded-md object-cover"
              />
              <div className="flex flex-col justify-center">
                <div className="mb-2 text-sm text-gray-500">
                  {posts[0].category} <span>•</span> {posts[0].date}
                </div>
                <h3 className="text-2xl font-bold hover:underline">
                  {posts[0].title}
                </h3>
                <p className="mt-4 text-gray-600">{posts[0].description}</p>
                <div className="mt-4 flex items-center">
                  <img
                    src={posts[0].author?.image}
                    alt={posts[0].author?.name}
                    className="mr-4 h-10 w-10 rounded-full"
                  />
                  <p className="text-sm text-gray-700">
                    {posts[0].author?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Articles */}
          <div className="col-span-4 grid grid-cols-2 gap-4">
            {posts.slice(1, 3).map((post) => (
              <div key={post.id} className="flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full rounded-md object-cover"
                />
                <div className="mt-4 text-sm text-gray-500">
                  {post.category} <span>•</span> {post.date}
                </div>
                <h3 className="mt-2 text-lg font-bold hover:underline">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {post.author?.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Trending */}
        <div className="col-span-4">
          <h3 className="mb-4 text-xl font-bold">Trending</h3>
          <div className="flex flex-col gap-6">
            {sidePosts.map((post) => (
              <div key={post.id} className="border-b pb-4">
                <div className="text-sm text-gray-500">
                  {post.category} <span>•</span> {post.date}
                </div>
                <h3 className="text-lg font-bold hover:underline">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {post.author?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturePost;
