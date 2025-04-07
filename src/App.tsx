import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Error404 from "./pages/404";
import Root from "./layout/root";
import Confirmation from "./pages/Confirmation";
import Cart from "./pages/Cart";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
