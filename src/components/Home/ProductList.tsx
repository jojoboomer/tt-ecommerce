'use client';

import { use } from "react";
import ProductCard from "../UI/ProductCard"

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Error al obtener datos');
  }
  return response.json();
};

function ProductList() {
  const products = use(fetchProducts());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList

