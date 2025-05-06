import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-white flex gap-2 items-center"
          >
            <img src={"/logo.png"} alt="logo" className="size-16" /> MY ECOMMERCE
          </Link>
          <p className="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
