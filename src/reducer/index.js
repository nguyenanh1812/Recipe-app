import { combineReducers } from "@reduxjs/toolkit";
import details from "./details";
import listRecipe from "./listRecipe";

const rootReducer = combineReducers({
    listRecipe: listRecipe,
    details: details,
});

export default rootReducer;