"use client";

import { Link } from "react-router";
import { toast } from "sonner";
import { useCart } from "../../store/cart";
import { AddCart } from "../Icons/AddCart";
import { Button } from "../UI/Button";

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  const handleAddToCart = (product: Product) => {
    add(product);
    toast.info("Producto agregado al carrito");
  };

  return (
    <div className="relative overflow-hidden rounded bg-white shadow pb-4 flex flex-col gap-1">
      <div className="overflow-hidden">
        <Link to={`/p/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover transition duration-350 hover:scale-105 sm:h-72"
          />
        </Link>
      </div>

      <div className="relative px-4 flex flex-col justify-between flex-1">
        <div>
          <p className="text-base font-semibold">${product.price}</p>
          <h3 className="text-md font-medium line-clamp-2">{product.title}</h3>
        </div>

        <Button
          color="primary"
          size="medium"
          onClick={() => handleAddToCart(product)}
        >
          <AddCart className="h-5 w-5 stroke-white group-hover:stroke-primary transition-colors duration-200" />
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
