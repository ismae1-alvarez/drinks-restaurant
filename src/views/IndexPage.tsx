import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard";


function IndexPage() {
  const drinks =  useAppStore((state) => state.drinks);

  const hashDrinks =  useMemo(()=> drinks.drinks.length, [drinks])


  return (
    <>
      <h1 className="text-5xl font-extrabold">Recetas</h1>

      {hashDrinks ?(
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10">
          {drinks.drinks.map(drink=>(
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      ):(
        <>
        <p>No Hay bebidas</p>
      </>
      )
      }

    </>
  )
}
export default IndexPage