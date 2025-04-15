import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AddCart } from "../components/Icons/AddCart";
import { ArrowBack } from "../components/Icons/ArrowBack";
import { Star } from "../components/Icons/Star";
import { Button } from "../components/UI/Button";
import { useCart } from "../store/cart";

import { toast } from "sonner";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState<Product>();
  const { add } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params]);

  const handleAddToCart = (product: Product) => {
    add(product);
    toast.info('Producto agregado al carrito',)
  };

  return (
    <section className="py-8 px-48">
      <div className="mb-6 w-fit">
        <Link
          to={"/"}
          className="group flex items-center text-sm text-muted-foreground hover:text-secondary"
        >
          <ArrowBack className="h-5 w-5 stroke-black group-hover:stroke-secondary" />
          Volver a la tienda
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 relative aspect-square overflow-hidden rounded-lg shadow">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover bg-center"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    width="1.5rem"
                    height="1.5rem"
                    fill={
                      i < Math.floor(product?.rating.rate as number)
                        ? "#FFCB45"
                        : "#333"
                    }
                  />
                ))}
                <span className="ml-2 text-sm font-medium">
                  {product?.rating.rate}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product?.rating.count} reseñas)
              </span>
            </div>
          </div>

          <p className="text-3xl font-bold">${product?.price}</p>
          <p>{product?.description}</p>

          <div className="flex flex-wrap gap-4">
            <Button
              color="primary"
              size="medium"
              onClick={() => handleAddToCart(product as Product)}
            >
              <AddCart className="h-5 w-5 stroke-white group-hover:stroke-primary" />
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
