import { useMemo } from "react";
import {  NavLink, useLocation } from "react-router-dom"

function Header() {
  const {pathname} =  useLocation();

  const isHome =  useMemo(()=> pathname === '/', [ pathname]);

  return (
    <header className={isHome ? "bg-header bg-cover bg-center" :"bg-slate-800" }>
      <div className="mx-auto container px-5 py-12">
          <div className="flex justify-between items-center">
            <div>
              <img className="w-32" src="./logo.svg" alt="logotipo" />
            </div>

            <nav>
              <ul className="flex gap-5">
                <li>
                  <NavLink className={({isActive})=> isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"} to="/">
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({isActive})=> isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"} to="/favoritos">
                    Favoritos
                  </NavLink>
                </li>
              </ul>
            </nav>


          </div>
            { isHome && (
              <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 py-10 rounded-lg space-y-6 p-10">
                <div className="space-y-5">
                  <label 
                    htmlFor="categoria" 
                    className="block text-white uppercase font-extrabold text-lg"
                  >Nombre o Ingrediente</label>

                  <input 
                    type="text" 
                    id="ingredient" 
                    name="ingredient" 
                    className="p-3 w-fulll rounded-lg focus:outline-none" 
                    placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe"
                  />
                </div>

                <div className="space-y-5">
                  <label 
                    htmlFor="ingreient" 
                    className="block text-white uppercase font-extrabold text-lg"
                  >Categoria</label>

                  <select 
                    id="ingredient" 
                    name="ingredient" 
                    className="p-3 w-fulll rounded-lg focus:outline-none" 
                  >
                    <option value="">-- Seleccione ---</option>

                  </select>
                </div>

                <input 
                  type="submit" 
                  value="Buscar Receta"
                  className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold p-2 rounded-lg uppercase"
                />
              </form>
              )
            }
      </div>
    </header>
  )
}
export default Header