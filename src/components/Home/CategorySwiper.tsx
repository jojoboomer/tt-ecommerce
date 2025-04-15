import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useProductStore } from "../../store/products";

export const CategorySwiper = () => {
  const { allCategories, setFilters, filters } = useProductStore();
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Buscar por categorías</h2>
      <Swiper
        pagination={true}
        modules={[Navigation]}
        navigation
        slidesPerView={2}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full h-full"
      >
        {allCategories.map(({ title, image }, index) => (
          <SwiperSlide
            onClick={() => setFilters({ category: title })}
            className={` ${filters.category == title && `after:bg-black/50`}
          relative max-h-32 bg-black overflow-hidden aspect-square rounded-lg hover:cursor-pointer
          after:w-full after:h-full after:absolute after:inset-0 after:transition-colors after:duration-200
          hover:after:bg-black/50 group
          `}
            key={index}
          >
            <span
              className={` ${filters.category == title && `bottom-1/2`}
            absolute -bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 
            text-white text-lg font-semibold uppercase tracking-wide z-10 text-center
            transition-all duration-300 group-hover:bottom-1/2`}
            >
              {title}
            </span>
            <img
              className="object-cover object-center w-full h-full"
              src={image}
              alt={`Banner-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
