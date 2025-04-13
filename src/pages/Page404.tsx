import { Link } from "react-router"
import { Button } from "../components/UI/Button"

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="h-40 w-40 rounded-full bg-gray-100 flex items-center justify-center">
              {/* <ShoppingBag className="h-20 w-20 text-gray-400" /> */}
            </div>
            <div className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">?</span>
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página no encontrada</h2>
        <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button  color="primary" className="gap-2">
            <Link to="/">
              {/* <Home className="h-4 w-4" /> */}
              <span>Ir al inicio</span>
            </Link>
          </Button>
          <Button  color="primary" className="gap-2">
            <Link to="/products">
              {/* <ShoppingBag className="h-4 w-4" /> */}
              <span>Ver productos</span>
            </Link>
          </Button>
          <Button  color="primary" className="gap-2">
            <Link to="javascript:history.back()">
              {/* <ArrowLeft className="h-4 w-4" /> */}
              <span>Volver atrás</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page404