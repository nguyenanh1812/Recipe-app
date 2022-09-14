import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { changeIngredinetSlice } from './reducer/changeIngredientSlice';
import { shoppingListSlice } from './reducer/shoppingListSlice';

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListSlice.reducer,
    changeIngredient: changeIngredinetSlice.reducer
  },
});
