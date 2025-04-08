import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import ProductList from "../components/Home/ProductList";
import ScrollUpButton from "../components/UI/ScrollUpButton ";
import { useProductStore } from "../store/products";

function Home() {
  const { allProducts, filters, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory =
      filters.category === "all" || p.category === filters.category;
    const matchesText = p.title
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    return matchesCategory && matchesText;
  });

  return (
    <>
      <section className="">
        <Banner />
        <ProductList products={filteredProducts} />
      </section>
      <ScrollUpButton />
    </>
  );
}

export default Home;
