import { Link } from "react-router";
import { useModalContext } from "../../context/ModalContext";
import { ModalCart } from "../Cart/ModalCart";
import { Cart } from "../Icons/Cart";
import { Button } from "./Button";
import SearchInput from "./SearchInput";

export const Header = () => {
  const { state, setState } = useModalContext();

  return (
    <header className=" bg-white shadow fixed top-0 left-0 right-0 z-50 h-20 flex items-center">
      <div className="flex items-center justify-between h-16 w-full px-8 md:px-24">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 flex gap-2 items-center"
          >
            <img src={"/logo.png"} alt="logo" className="size-16 font-extrabold" /> MY ECOMMERCE
          </Link>
        </div>
        <div className="hidden md:flex relative  items-center justify-center flex-1 px-24 h-10 ">
          <SearchInput />
        </div>
        <nav className="flex items-center space-x-4">
          <Button color="primary" onClick={() => setState((state) => !state)}>
            <Cart className="h-5 w-5 stroke-white group-hover:stroke-primary" />
            Mi carrito
          </Button>
        </nav>
      </div>
      {state && <ModalCart />}
    </header>
  );
};
