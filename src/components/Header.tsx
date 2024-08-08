import { Link, useLocation } from "react-router-dom"

function Header() {
  // const {pathname} =  useLocation();

  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-12">
          <div className="flex justify-between items-center">
            <div>
              <img className="w-32" src="./logo.svg" alt="logotipo" />
            </div>

            <nav>
              <ul className="flex gap-5">
                <li>
                  <Link to="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/favoritos">
                    Favoritos
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
      </div>
    </header>
  )
}
export default Header