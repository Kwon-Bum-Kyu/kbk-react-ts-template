import { FunctionComponent } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider: FunctionComponent<SectionProps> = ({ posts }) => {
  return (
    <section id="slider" className="bg-gray-900 py-10">
      <div
        className="container mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide
              key={index}
              style={{ backgroundImage: `url(${post.image})` }}
              className="bg-cover bg-center"
            >
              <div className="bg-black/50 p-10">
                <h2 className="text-2xl font-bold text-white">
                  <a href={post.link}>{post.title}</a>
                </h2>
                <p className="mt-4 text-gray-300">{post.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
