function Banner() {
  return (
    <section
      className="h-80 my-24 flex items-center justify-center text-center bg-center bg-cover bg-amber-600 bg-no-repeat"
      style={{
        backgroundImage: "url(/banner.jpg)",
      }}
    >
      <div className="">
        <h1 className="text-4xl font-bold">Bienvenido a nuestra tienda</h1>
        <p className="text-xl mb-6">
          Descubre nuestros productos de alta calidad
        </p>
        <a
          href="#products"
          className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Ver todas las ofertas
        </a>
      </div>
    </section>
  );
}

export default Banner;
