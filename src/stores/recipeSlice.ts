import { StateCreator } from "zustand";
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";
import { FavoritesSlicesType } from "./favoritesSlice";

export type RecipeSliceType ={
    categories : Categories,
    drinks :  Drinks,
    selectedRecipe : Recipe, 
    modal :boolean, 
    fetchCategories : ()=> Promise<void>,
    searchRecipe : (searchFilter:SearchFilter)=> Promise<void>,
    selectRecipe : (drinks : Drink['idDrink'])=> Promise<void>, 
    closeModal :  ()=>void, 

};

export const createRecipesSlice : StateCreator<RecipeSliceType & FavoritesSlicesType, [], [], RecipeSliceType> = (set)=>({
    categories : {
        drinks : []
    }, 
    drinks : {
        drinks :[]
    },
    selectedRecipe : {} as Recipe,
    modal :false, 
    fetchCategories : async()=>{
        const categories = await getCategories();
        set({categories})
    }, 
    searchRecipe : async (filter)=>{
        const drinks = await getRecipes(filter);
        set({drinks})
    },
    selectRecipe :  async(id : Drink['idDrink'])=>{
        const selectedRecipe =  await getRecipesById(id);
        set({
            selectedRecipe, 
            modal : true, 
        })
    }, 
    closeModal :  ()=>{
        set({
            modal: false, 
            selectedRecipe : {} as Recipe
        })
    },
    
});