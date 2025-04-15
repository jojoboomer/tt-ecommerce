import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { Footer } from "../components/Footer";
import { Header } from "../components/UI/Header";
import ScrollUpButton from "../components/UI/ScrollUpButton ";

function Root() {

  return (
    <>  
      <main className="min-h-screen h-screen text-text flex flex-col">
      <Header/>
        <div className="container mx-auto pt-20 flex-1 px-4 md:px-0">
          <Outlet />
        </div>
        <Footer/>
      </main>
      <ScrollUpButton />
      <Toaster position="bottom-left" expand={true} richColors  closeButton />
    </>
  );
}

export default Root;
