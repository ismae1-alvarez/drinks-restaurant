import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FavoritesPage, IndexPage } from "./views"
import Layout from "./layouts/Layout"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout/>}>

            <Route path="/" element={<IndexPage/>}/>
            <Route path="/favoritos" element={<FavoritesPage/>}/>
            
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter