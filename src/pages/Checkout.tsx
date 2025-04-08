import { Item } from "../components/Cart/Item";
import { Button } from "../components/UI/Button";
import { useCart } from "../store/cart";

function Checkout() {
  const { products, totalPrice,clear } = useCart();

  const handleCheckout = () => {
    alert('Compra finalizada');
    clear();

  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="mx-auto max-w-3xl bg-white shadow-lg rounded px-8 py-2">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Tu compra
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {products.map((product) => (
                <Item key={product.id} product={product} />
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen space-y-4">
                <dl className="space-y-0.5 text-sm ">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${totalPrice}</dd>
                  </div>
                </dl>

                <div className="flex justify-end gap-2">
                  <Button to="/" color="secondary">Seguir comprando</Button>
                  <Button color="primary" onClick={() => handleCheckout()}>Finalizar compra</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
