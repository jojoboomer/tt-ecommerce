import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/UI/Header";

function Root() {

  return (
    <>  
      <main className="min-h-screen h-screen text-text flex flex-col">
      <Header/>
        <div className="container mx-auto pt-20 flex-1">
          <Outlet />
        </div>
        <Footer/>
      </main>
    </>
  );
}

export default Root;
