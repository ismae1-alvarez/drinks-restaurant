import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSlicesType } from "./favoritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


export const useAppStore = create<RecipeSliceType & FavoritesSlicesType & NotificationSliceType>()(devtools((...a) =>({
    ...createRecipesSlice(...a), 
    ...createFavoritesSlice(...a), 
    ...createNotificationSlice(...a)
})));