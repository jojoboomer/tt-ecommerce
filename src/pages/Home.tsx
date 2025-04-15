import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import { CategorySwiper } from "../components/Home/CategorySwiper";
import ProductList from "../components/Home/ProductList";
import { useProductStore } from "../store/products";

function Home() {
  const { allProducts, filters, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory =
      filters.category === "all" || p.category.title === filters.category;
    const matchesText = p.title
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    return matchesCategory && matchesText;
  });

  return (
    <>
      <section className="space-y-8">
        <Banner />
        <CategorySwiper/>
        <ProductList products={filteredProducts} />
      </section>
    </>
  );
}

export default Home;
