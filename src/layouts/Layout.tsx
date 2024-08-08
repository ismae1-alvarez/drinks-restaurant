import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import Header from "../components/Header"

function Layout() {
  return (
    <Fragment>
      <Header/>
      <Outlet/>

    </Fragment>
  )
}
export default Layout