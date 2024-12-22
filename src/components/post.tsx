const Post: React.FC<SectionProps> = ({ title, posts, seeAllLink }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          {seeAllLink && (
            <a href={seeAllLink} className="text-blue-500 hover:underline">
              See All {title}
            </a>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="rounded bg-white p-4 shadow">
              <img
                src={post.image}
                alt={post.title}
                className="mb-4 h-48 w-full rounded object-cover"
              />
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-600">
                  {post.meta.category}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-600">{post.meta.date}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                <a href={post.link} className="hover:text-blue-500">
                  {post.title}
                </a>
              </h3>
              <p className="mb-4 text-gray-600">{post.description}</p>
              <div className="flex items-center">
                <img
                  src={`/assets/authors/${post.author}.jpg`}
                  alt={post.author}
                  className="mr-2 h-8 w-8 rounded-full"
                />
                <span className="text-sm text-gray-700">{post.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
