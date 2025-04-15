import { useNavigate } from "react-router";
import { useModalContext } from "../../context/ModalContext";
import { useCart } from "../../store/cart";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";
import { QuantityInput } from "../UI/QuantityInput";

export const ModalCart = () => {
  const { products, update, remove } = useCart();
  const { setState } = useModalContext();
  const navigate = useNavigate();

  const onChange = (id: number, value: number) => {
    update(id, value);
  };

  const handleClose = (redirect: boolean = false) => {
    setState(false);
    if (redirect) navigate("/checkout");
  };

  return (
    <Modal>
      <div
        className="relative w-screen md:max-w-md  border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
      >
        <button
          onClick={() => handleClose()}
          className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            {products && products.map((product) => (
              <li key={product.id} className="flex items-center justify-between border-b pb-1 border-gray-200 ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="size-16 aspect-square rounded-sm object-cover"
                />
                <div className="flex items-center gap-2">
                  <h3 className="text-base text-end">{product.title}</h3>

                  <div className="flex items-center gap-1 ">
                    <QuantityInput
                    id={product.id}
                      value={product.quantity}
                      onChange={onChange}
                    />
                    <button
                      className="text-text transition hover:text-red-600 cursor-pointer"
                      onClick={() => remove(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
            {products && products.length === 0 && ( 
              <li className="flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-gray-900 text-lg">Tu carrito está vacío</h3>
                  <p className="text-gray-600">Agrega algunos productos a tu carrito para poder realizar la compra</p>
                </div>
                
              </li>
            )}
          </ul>

          <div className="space-y-4 flex justify-end">
            <Button color="secondary" onClick={() => handleClose(true)}>
              Confirmar compra
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
