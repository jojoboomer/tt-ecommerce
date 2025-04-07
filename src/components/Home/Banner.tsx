function Banner() {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra tienda</h1>
          <p className="text-xl mb-6">Descubre nuestros productos de alta calidad</p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Ver ofertas
          </button>
        </div>
      </div>
    )
  }
  
  export default Banner
  
  