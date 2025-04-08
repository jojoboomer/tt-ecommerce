"use client";

import { closeSnackbar, SnackbarKey, useSnackbar } from "notistack";
import { Link } from "react-router";
import { useCart } from "../../store/cart";
import { AddCart } from "../Icons/AddCart";
import { Button } from "./Button";

const action = (snackbarId : SnackbarKey) => (
  <>
    <button onClick={() => { closeSnackbar(snackbarId) }}>
      X
    </button>
  </>
);

function ProductCard({ product } : { product: Product }) {
  const { add } = useCart();
  const { enqueueSnackbar } = useSnackbar();


  const handleAddToCart = (product: Product) => {
    add(product);
    enqueueSnackbar('Producto agregado al carrito',  {action});
  };

  return (
    <div className=" relative block overflow-hidden rounded bg-white shadow py-1">
      <div className="overflow-hidden">
        <Link to={`/p/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover transition duration-350 hover:scale-105 sm:h-72"
          />
        </Link>
      </div>

      <div className="relative px-4 flex flex-col gap-2">
        <p className="text-base ">${product.price}</p>

        <h3 className="text-md font-medium truncate">{product.title}</h3>

        <Button
          color="primary"
          size="medium"
          onClick={() => handleAddToCart(product)}
        >
          <AddCart className="h-5 w-5 stroke-white group-hover:stroke-primary" />
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
