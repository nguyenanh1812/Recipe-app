import { createSlice } from "@reduxjs/toolkit";

export const listRecipeSlice = createSlice({
    name: 'listRecipe',
    initialState: JSON.parse(localStorage.getItem('listRecipe')) || [],
    reducers: {
        addRecipe(state, action) {
            state.push(action.payload)
            localStorage.setItem('listRecipe', JSON.stringify(state))
        },
        removeRecipe(state, action) {
            state.splice(action.payload, 1)
            localStorage.setItem('listRecipe', JSON.stringify(state))
        },
        saveEditDetails(state, action) {
            state[action.payload.index].ingredient = action.payload.ingredient
            localStorage.setItem('listRecipe', JSON.stringify(state))
            return state
        }
    }
})

export const { reducer, actions } = listRecipeSlice
export const { addRecipe, removeRecipe, saveEditDetails } = actions