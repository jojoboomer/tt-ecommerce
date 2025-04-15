import ProductCard from "./ProductCard";

function ProductList({ products }: { products: Product[] }) {

  return (
    <section id="products" className="">
      <h2 className="text-2xl font-bold mb-6">Nuestros Productos</h2>
      {products.length === 0 && ( 
          <div className="flex flex-col items-center justify-center gap-4 text-center w-full">
            <p className="text-gray-600">
            No hay productos disponibles
            </p>
            <p className="text-gray-600">
            Intenta cambiar tu búsqueda o selecciona una categoría
            </p>
          </div>
        )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-500">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
