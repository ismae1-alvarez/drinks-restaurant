import { StateCreator } from "zustand";
import { Recipe } from "../types"
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


export type FavoritesSlicesType = {
    favorites : Recipe[], 
    handlClickFavorite : (recipe:Recipe)=> void, 
    favoriteExists : (id:Recipe['idDrink'])=> boolean ,
    loadFromStorage : ()=> void, 
};

export const createFavoritesSlice : StateCreator<FavoritesSlicesType & RecipeSliceType & NotificationSliceType, [],[], FavoritesSlicesType> =(set, get, api)=>({
    favorites : [],
    handlClickFavorite : (recipe)=>{
        if(get().favoriteExists(recipe.idDrink)){
            set((state)=> ({
                favorites : state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({text :'Se elimino de favoritos', error: false})
        }else{
            set((state)=> ({
                favorites :[...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({text :'Se agrego favorios', error: false})
        };
        createRecipesSlice(set, get, api).closeModal();

        localStorage.setItem('favorites', JSON.stringify(get().favorites));

        
    },
    favoriteExists : (id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage:()=>{
        const storedFacorites =  localStorage.getItem('favorites')

        if(storedFacorites){
            set({
                favorites : JSON.parse(storedFacorites)
            })
        }
    }
})