import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import Header from "../components/Header"
import Modal from "../components/Modal"

function Layout() {
  return (
    <Fragment>
      <Header/>
      
      <main className="container mx-auto py-16">
        <Outlet/>
      </main>

      <Modal/>

    </Fragment>
  )
}
export default Layout