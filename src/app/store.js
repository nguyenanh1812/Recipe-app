import { configureStore, createStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootReducer from '../reducer/index';
import { hiddenNewRecipe } from '../reducer/hiddenNewRecipe';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
export const store=createStore(rootReducer)
// console.log(rootReducer)