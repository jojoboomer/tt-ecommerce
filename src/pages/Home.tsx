import { Suspense } from "react";
import Banner from "../components/Home/Banner"
import ProductList from "../components/Home/ProductList"



function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Nuestros Productos</h2>
          <ProductList/>
      </section>
    </div>
  )
}

export default Home

