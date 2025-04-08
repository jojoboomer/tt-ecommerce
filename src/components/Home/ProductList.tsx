import { useProductStore } from "../../store/products";
import { capitalizeWords } from "../../utils/filters";
import ProductCard from "../UI/ProductCard";

function ProductList({ products }: { products: Product[] }) {
  const { filters, setFilters, allCategories } = useProductStore();

  return (
    <section id="products" className="">
      <h2 className="text-2xl font-bold mb-6">Nuestros Productos</h2>
      <section className="flex md:flex-row flex-col-reverse items-center md:justify-end gap-4 justify-center mb-4">
        <input
          type="text"
          value={filters.searchText}
          onChange={(e) => setFilters({ searchText: e.target.value })}
          placeholder="Buscar producto..."
          className="h-10 w-64 px-2 rounded border-gray-300 shadow-sm sm:text-sm"
        />
        <select
          value={filters.category}
          onChange={(e) => setFilters({ category: e.target.value })}
          className="h-10 w-32 px-2 rounded border-gray-300 shadow-sm sm:text-sm"
        >
          <option value="all">Todas</option>
          {allCategories.map((category, index) => (
            <option key={index} value={category}>
              {capitalizeWords(category)}
            </option>
          ))}
        </select>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
