import { Link } from "react-router"

export const NavLink = () => {
    return (
        <nav className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Inicio
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 flex items-center">
              Carrito
            </Link>
          </nav>
    )

}