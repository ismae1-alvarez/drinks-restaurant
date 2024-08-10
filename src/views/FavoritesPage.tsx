import { Fragment } from "react/jsx-runtime"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard";
import { useMemo } from "react";


function FavoritesPage() {
  const {favorites} =  useAppStore(state => state);

  const hasFavorites = useMemo(()=> favorites.length, [favorites]);

  return (
    <Fragment>
      <h1 className="text-5xl font-extrabold">Favoritos</h1>
      {hasFavorites ?(
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10">
        {favorites.map(drink =>(
          <DrinkCard 
            key={drink.idDrink}
            drink={drink}
          />
        ))}
      </div>
      ):(
        <p className="my-10 text-center text-2xl"> Los favoritos se mostraran aqui</p>
      )
      }
    </Fragment>
  )
}
export default FavoritesPage