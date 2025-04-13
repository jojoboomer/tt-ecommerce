import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useProductStore } from "../../store/products";

export const CategorySwiper = () => {
  const { allCategories } = useProductStore();
  return (
    <>
    <h2 className="text-2xl font-bold mb-6">Categorías</h2>

<Swiper
  pagination={true}
  modules={[Navigation]}
  breakpoints={{
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  }}
  spaceBetween={10}
  slidesPerView={8}
  className="w-full h-full"
>
  {allCategories.map((image, index) => (
    <SwiperSlide className="relative min-h-20 bg-amber-200" key={index}>
      <img className="object-cover" src={image} alt={`Banner-${index}`} />
    </SwiperSlide>
  ))}
</Swiper>
</>
  );
};
