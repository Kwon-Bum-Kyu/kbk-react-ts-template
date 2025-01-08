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
        <div className="col-span-8 flex flex-col gap-12">
          {/* 첫 번째 Row - Main Article */}
          <div className="grid grid-cols-12 gap-6">
            {/* 이미지 섹션 */}
            <div className="col-span-6">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="h-auto w-full rounded-md object-cover"
              />
            </div>

            {/* 텍스트 섹션 */}
            <div className="col-span-6 flex flex-col justify-center">
              {/* 카테고리 및 날짜 */}
              <div className="mb-2 text-sm text-gray-500">
                {posts[0].category} <span className="mx-1">•</span>{" "}
                {posts[0].date}
              </div>
              {/* 제목 */}
              <h3 className="text-2xl font-bold leading-snug hover:underline">
                {posts[0].title}
              </h3>
              {/* 설명 */}
              <p className="mt-4 text-gray-600">{posts[0].description}</p>
              {/* 작성자 정보 */}
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

          {/* 두 번째 Row - Sub Articles */}
          <div className="grid grid-cols-3 gap-6">
            {/* 왼쪽 섹션 */}
            <div className="col-span-1 grid grid-cols-1 gap-6">
              {/* 첫 번째 아이템 */}
              <div className="flex flex-col">
                <img
                  src={posts[1].image}
                  alt={posts[1].title}
                  className="h-48 w-full rounded-md object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm text-gray-500">
                    {posts[1].category} <span className="mx-1">•</span>{" "}
                    {posts[1].date}
                  </div>
                  <h3 className="mt-2 text-lg font-bold hover:underline">
                    {posts[1].title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {posts[1].author?.name}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {posts[1].description}
                  </p>
                </div>
              </div>

              <hr className="my-4 border-gray-300" />

              {/* 두 번째 아이템 */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-sm text-gray-500">
                    {posts[2].category} <span className="mx-1">•</span>{" "}
                    {posts[2].date}
                  </div>
                  <h3 className="mt-2 text-lg font-bold hover:underline">
                    {posts[2].title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {posts[2].author?.name}
                  </p>
                </div>
              </div>
            </div>

            {/* 오른쪽 섹션 */}
            {/* 세 번째 아이템 */}
            <div className="col-span-2 gap-6">
              <div className="flex h-full flex-col justify-between">
                <img
                  src={posts[3].image}
                  alt={posts[3].title}
                  className="h-327 w-full rounded-md object-cover"
                />
                <div className="mt-4 text-sm text-gray-500">
                  {posts[3].category} <span className="mx-1">•</span>{" "}
                  {posts[3].date}
                </div>
                <h3 className="mt-2 text-lg font-bold hover:underline">
                  {posts[3].title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {posts[3].author?.name}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {posts[3].description}
                </p>
              </div>
            </div>
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
