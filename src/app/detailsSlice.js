import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
    name: 'details',
    initialState: {},
    reducers: {
        addDetails(state, action) {
            return action.payload
        },
        addEditDetails(state, action) {
            state?.ingredient.push({
                nameIngredient: '',
                countIngredient: ''
            })
        },
        removeEditDetails(state, action) {
            state?.ingredient.splice(action.payload, 1)
        },
        changeNameEditDetails(state, action) {
            state.ingredient[action.payload.index].nameIngredient = action.payload.payload
            return state
        },
        changeCountEditDetails(state, action) {
            state.ingredient[action.payload.index].countIngredient = action.payload.payload
            return state
        }
    }
})

export const { reducer, actions } = detailsSlice
export const { addDetails, addEditDetails, removeEditDetails, changeNameEditDetails, changeCountEditDetails } = actions