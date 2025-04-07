import { Outlet } from "react-router"
import { Header } from "../components/UI/Header"

function Root() {
  return (
    <>
    <Header />
    <main>
        <Outlet/>
    </main>
    </>

  )
}

export default Root