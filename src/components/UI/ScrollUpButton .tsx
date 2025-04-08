import { useEffect, useState } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o esconder el botón dependiendo del desplazamiento
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Desplazar hacia arriba al hacer clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Establecer el evento de desplazamiento
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-primary p-2 rounded-full shadow-lg cursor-pointer hover:opacity-90"
      >
        <svg
          className="size-6 stroke-white fill-white "
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"></path>
          </g>
        </svg>
      </button>
    )
  );
};

export default ScrollUpButton;
