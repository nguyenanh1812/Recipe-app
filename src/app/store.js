import { configureStore } from '@reduxjs/toolkit';
import { detailsSlice } from './detailsSlice';
import { listIngredientSlice } from './listIngredientSlice';
// import counterReducer from '../features/counter/counterSlice';
import { listRecipeSlice } from './listRecipeSlice';
import { shoppingListSlice } from './shoppingListSilce';

export const store = configureStore({
  reducer: {
    listRecipe: listRecipeSlice.reducer,
    listIngredient: listIngredientSlice.reducer,
    details: detailsSlice.reducer,
    shoppingList : shoppingListSlice.reducer
  },
});
