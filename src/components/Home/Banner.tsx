import "swiper/swiper-bundle.css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BANNER_IMAGES = ["/banner-1.jpg", "/banner.jpg"];

function Banner() {
  return (
    <div className="my-8 overflow-hidden rounded-lg ">
      <Swiper
        pagination={true}
        modules={[Pagination,Autoplay ]}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}        className="w-full h-full"
      >
        {BANNER_IMAGES.map((image, index) => (
          <SwiperSlide className="relative min-h-80 bg-amber-200" key={index}>
            <img className="object-cover" src={image} alt={`Banner-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
