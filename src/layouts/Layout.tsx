import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import Header from "../components/Header"
import Modal from "../components/Modal"
import {  useAppStore } from "../stores/useAppStore"
import { useEffect } from "react"
import Notification from "../components/Notification"

function Layout() {

  const {loadFromStorage} =  useAppStore(state => state);

  useEffect(()=>{
    loadFromStorage();
  }, []);

  return (
    <Fragment>
      <Header/>
      
      <main className="container mx-auto py-16">
        <Outlet/>
      </main>

      <Modal/>
      <Notification/>

    </Fragment>
  )
}
export default Layout