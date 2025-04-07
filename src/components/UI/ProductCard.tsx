"use client"

import { useState } from "react"

function ProductCard({ product }) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
    // Here you would typically dispatch an action to add the product to the cart
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className={`mt-3 w-full py-2 px-4 rounded-md font-medium transition-colors ${
            added ? "bg-green-500 text-white" : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          {added ? "Añadido ✓" : "Añadir al carrito"}
        </button>
      </div>
    </div>
  )
}

export default ProductCard

