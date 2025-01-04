import { FunctionComponent } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider: FunctionComponent<SectionProps> = ({ posts }) => {
  return (
    <section
      id="slider"
      className="section bg-gray-900 bg-transparent py-10 text-white"
    >
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          speed={600}
          slidesPerView={1}
          slidesPerGroup={1}
          centeredSlides
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="relative"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative flex h-[500px] items-end bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <div className="relative z-10 max-w-lg p-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    <a href={post.link} className="hover:underline">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-sm">{post.description}</p>
                </div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
