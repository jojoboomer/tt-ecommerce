import { Link } from "react-router";
import { NavLink } from "./NavLink";

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Mi Tienda
            </Link>
          </div>
          <NavLink/>
        </div>
      </div>
    </header>
  )
}


